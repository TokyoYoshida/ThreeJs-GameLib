import ViewCamera      from '../view/ViewCamera.js';


class FixCamera extends ViewCamera {

  constructor(x = 0, y = 0, z = 0){

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

    super(camera);

    this.setPosition(x, y, z);
  }

  render(){
    if( this._attachPlayer !== null){
      this.lookAt(this._attachPlayer.x ,this._attachPlayer.y , this._attachPlayer.z);
    }
  }

}
export default FixCamera;
