import { World } from "../world/World.js";

async function main(){

   
    const container = document.querySelector("#scene-container");
    
    const world = new  World(container);
    await world.init();
    world.start();
   
   

    // const renderer = new WebGLRenderer();
    
    // renderer.setSize(container.clientWidth,container.clientHeight);
  
   
}
main().catch((err) => {
    console.error(err);
  });

