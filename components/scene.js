import { Color, Scene } from "three"

export default function createScene (){
    const scene = new Scene();
    scene.background= new Color("orange");
    return scene

}
