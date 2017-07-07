import ThirdParsonCamera from './ThirdParsonCamera.js';
import Calc             from '../support/Calc.js';


class SmoothParsonaCamera extends ThirdParsonCamera {

  render(){
    if( this._attachPlayer !== null){

      const vector = Calc.fowardVector2(this._attachPlayer.rotateY, -0.8 );
      const target = new THREE.Vector3(this._attachPlayer.x + vector.x ,this._attachPlayer.y + vector.y + 0.5, this._attachPlayer.z + vector.z);
      const camera = this._camera.position;

      const distance = target.distanceTo(camera);
      const div     = (distance != Infinity && distance != 0 ) ? 10/distance : 1;

      const addVec = Calc.stepToTarget(target, camera, div);
      camera.add(addVec);

      this.setPosition(camera.x, camera.y, camera.z);

      this.lookAt(this._attachPlayer.x,this._attachPlayer.y, this._attachPlayer.z);
    }
  }


  dot_product( vl,  vr) {
  	return vl.x * vr.x + vl.y * vr.y + vl.z * vr.z;
  }

}
export default SmoothParsonaCamera;
