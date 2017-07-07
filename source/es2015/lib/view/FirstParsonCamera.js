import ViewCamera      from '../view/ViewCamera.js';


class FirstParsonCamera extends ViewCamera {

  constructor(){

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

    super(camera);

  }

  render(){
    if( this._attachPlayer !== null){
      this.setPosition(this._attachPlayer.x ,this._attachPlayer.y , this._attachPlayer.z);
      this.setRotate(this._attachPlayer.rotateX ,this._attachPlayer.rotateY , this._attachPlayer.rotateZ);
    }
  }

}
export default FirstParsonCamera;
