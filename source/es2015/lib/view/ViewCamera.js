class ViewCamera {

  constructor(camera){

    this._camera = camera;

    this.setPosition(0,0,0);

  }

  get camera(){
    return this._camera;
  }

  setPosition(x, y, z){
    this._camera.position.set(x, y, z);
  }

  setRotate(x, y, z){
    this._camera.rotation.set(x, y, z);
  }

  cameraAttachToPlayer(player){
    this._attachPlayer = player;
  }

  lookAt(x, y, z){
    this._camera.lookAt(new THREE.Vector3(x, y, z));
  }

  render(){
    console.assert( false ,"This method should not be called."  );
  }

}
export default ViewCamera;
