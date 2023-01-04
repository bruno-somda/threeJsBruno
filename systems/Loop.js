import {Clock} from "three"
 const clock = new Clock();
function tick(updateCube){
    const Delta = clock.getDelta()
    for(let objects of updateCube){
    
        objects.tick(Delta)
    }
}
class Loop{

    constructor(renderer,scene,camera){

        this.scene = scene;
        this.renderer = renderer;
        this.camera = camera;
       this.updateCube = []
        
    }
    start(){

        this.renderer.setAnimationLoop(()=>{
            tick(this.updateCube);
            this.renderer.render(this.scene,this.camera);
        })
    }
    stop(){
        this.renderer.setAnimationLoop(null);
    }
}
export {Loop}