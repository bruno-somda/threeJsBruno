
import  createCamera  from "../components/camera.js";
import { createMeshGroups } from "../components/createMeshGroups.js";
import  createCube  from "../components/cube.js";
import { createLights } from "../components/lights.js";
import  createScene  from "../components/scene.js";
import { Train } from "../components/Train/Train.js";
import { createControl } from "../systems/controls.js";
import { Loop } from "../systems/Loop.js";
import createRenderer from "../systems/renderer.js";
import { Resizer } from "../systems/Resizer.js";
import { loadBirds } from "../components/birds/birds.js";
let camera,renderer,scene,loop,controls;


class World{
    constructor(container){

        scene = createScene();
        camera = createCamera(container);
        renderer = createRenderer();
        const {mesh,cloneMesh} = createCube();
       
        const train = new Train();
        train.position.set(-4,0,1);
        train.scale.set(0.5,0.5,0.5);

        const {ambientsLight,mainLights,hemisLight} = createLights()

        container.append(renderer.domElement);
        const resizer = new Resizer(container,camera,renderer);
        loop = new Loop(renderer,scene,camera);
        const meshGroup = createMeshGroups();
        scene.add(meshGroup,mainLights,hemisLight,ambientsLight,train,mesh,cloneMesh);
        
        controls = createControl(camera,renderer.domElement);
       controls.addEventListener("change",()=>{
        this.render()

       })
       loop.updateCube.push(controls,meshGroup,train,mesh,cloneMesh);
       
       
    }
    async init(){
        const { parrot, flamingo, stork } = await loadBirds();
        controls.target.copy(parrot.position);
        loop.updateCube.push(parrot, flamingo, stork);
        scene.add(parrot, flamingo, stork);
    }
    start(){
       loop.start()
    }
    stop(){
        loop.stop();
    }
    render(){

        renderer.render(scene,camera);
    }
}
export {World};