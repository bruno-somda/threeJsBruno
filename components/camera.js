import { PerspectiveCamera } from "three";

export default function createCamera (container){

    const size = {
        width: container.clientWidth,
        height: container.clientHeight
    }
    const camera = new PerspectiveCamera(75,size.width/size.height,0.01,1000);
    camera.position.z= 15;
    return camera;

}
