import { MeshBasicMaterial,BoxBufferGeometry, Mesh, MeshStandardMaterial,MathUtils ,TextureLoader} from "three";
function createMaterial(){
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load("assets/textures/images.jpeg")
    const material = new MeshStandardMaterial({map:texture});
    return material;
}
function createCloneMaterial(object){
    object.material= new MeshStandardMaterial({ color: "yellow" });
    
    object.scale.set(1.5,1.5,1.5);
    object.position.set(2,-0.5,0.5);
    
}
export default function createCube (){

    const geometry = new BoxBufferGeometry(1,1,1);
    const material = createMaterial();
    // creation d'un objet
    const mesh = new Mesh(geometry,material);
    mesh.scale.set(0.5,0.5,0.5);
    mesh.position.set(-0.5,1,-2);

    const cloneMesh = mesh.clone();
     createCloneMaterial(cloneMesh);

    const mathUls = MathUtils.degToRad(30)
    // function d'animation
    mesh.tick=(delta)=>{
        mesh.rotation.x += delta*mathUls;
    }

    cloneMesh.tick=(delta)=>{
        cloneMesh.rotation.x -= delta*mathUls;
    }
    
    return {mesh,cloneMesh};
}
