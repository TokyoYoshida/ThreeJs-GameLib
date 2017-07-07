class Calc  {

  static fowardVector2(rotationY ,step ,){

    const theta = rotationY;//- ( 40 * 180 / Math.PI);

    const x = Math.sin(theta) * step;
    const y = 0;
    const z = Math.cos(theta) * step;
    // console.log(theta);

    return new THREE.Vector3(x, y, z);

  }

  static _fowardVector2(rotationY ,step ,){

    const theta = rotationY;//- ( 40 * 180 / Math.PI);

    const x = 1*Math.sin(theta) * step;
    const y = 0;
    const z = 1* Math.cos(theta) * step;

    return new THREE.Vector3(x, y, z);

  }

  static stepToTarget(vecTo, vecFrom ,div){
    const addVec = vecTo.clone();

    addVec.sub(vecFrom);

    addVec.divideScalar(div);

    return addVec
  }

  static angleToRadian(angle){
    return angle * (Math.PI / 180);
  }

}
export default Calc;
