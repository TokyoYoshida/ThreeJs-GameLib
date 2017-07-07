import ViewCamera      from '../view/ViewCamera.js';
import Calc            from '../support/Calc.js';


class ThirdParsonCamera extends ViewCamera {

  constructor(){

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

    super(camera);

  }

  render(){
    if( this._attachPlayer !== null){
      const vector = Calc.fowardVector2(this._attachPlayer.rotateY, -1 );
      // this.setPosition(0,0.75,0);
      this.setPosition(this._attachPlayer.x + vector.x ,this._attachPlayer.y + vector.y + 0.5, this._attachPlayer.z + vector.z);
      // this.setRotate(this._attachPlayer.rotateX ,this._attachPlayer.rotateY+Math.PI , this._attachPlayer.rotateZ);
      this.lookAt(this._attachPlayer.x,this._attachPlayer.y, this._attachPlayer.z);
    }
  }

}
export default ThirdParsonCamera;
