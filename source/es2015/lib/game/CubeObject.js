import GameObject      from './GameObject.js';

class CubeObject extends GameObject {

  constructor() {

    const geometry = new THREE.CubeGeometry(10,10,10);
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    cube.rotation.z = 10;
    cube.rotation.x = 10;
    super(cube);

  }
}

export default CubeObject;
