import { WebGLRenderer } from "three"

export default function createRenderer (){
    const renderer = new WebGLRenderer({antialias:true});
    renderer.physicallyCorrectLights =true;
    renderer.setPixelRatio(window.devicePixelRatio);
    return renderer;
}