import { Group, MathUtils, Mesh, MeshStandardMaterial, SphereBufferGeometry } from "three";

const radius = 0.25;
const widthSegments = 16;
const heightSegments = 16;


function createMeshGroups(){
  const group = new Group();
  const geometry = new SphereBufferGeometry(radius,widthSegments,heightSegments);
  const material = new MeshStandardMaterial({color: 'indigo',});
    const protoSphere = new Mesh(geometry, material);
    group.add(protoSphere);
    for (let i = 0; i < 1; i += 0.05) {
      const sphere = protoSphere.clone();
      sphere.position.x = Math.cos(2 -Math.PI -i);
      sphere.position.y = Math.sin(2 -Math.PI -i);
      sphere.position.z = -i * 5;
      sphere.scale.multiplyScalar(0.01 + i);
      group.add(sphere);
      }
      group.scale.multiplyScalar(2);

      const radiansPerSecond = MathUtils.degToRad(30);

      group.tick = (delta) => {
        group.rotation.z -= delta * radiansPerSecond;
      };

return group;

}
export {createMeshGroups}