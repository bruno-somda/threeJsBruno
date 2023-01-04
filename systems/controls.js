import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";

function createControl(camera,canvas){
    const controls = new OrbitControls(camera,canvas);
     controls.enableDamping  =true;
    
    controls.tick =()=>{
        // camera.position.set(1,2,3)
        // camera.rotation.set(0.5,0,0)
        controls.update();}
   
    return controls;

}
export {createControl}