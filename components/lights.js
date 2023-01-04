import { AmbientLight, DirectionalLight,HemisphereLight } from "three";

function createLights(){
    const ambientsLight = new AmbientLight("white",2)
    const mainLights= new DirectionalLight("white",5);
    mainLights.position.set(10,10,10);
    const hemisLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategrey', // dim ground color
        5, // intensity
      );
    return {ambientsLight,mainLights,hemisLight};
}
export {createLights};