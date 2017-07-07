import Calc from '../support/Calc.js';


class ViewObject {

  constructor(mesh){

    this._mesh = mesh;

    // this._positionX = mesh.position.x;
    // this._positionY = mesh.position.y;
    // this._positionZ = mesh.position.z;
    //
    // this._rotationX = mesh.rotation.x;
    // this._rotationY = mesh.rotation.y;
    // this._rotationZ = mesh.rotation.z;
  }

  clone(){
    const clone = this._mesh.clone();

    if( 'mass' in clone === true && clone.mass !== this._mesh.mass){
      clone.mass = this._mesh.mass;
    }

    return new ViewObject(clone);
  }

  setPosition(x, y, z){

    this._mesh.position.set(x ,y ,z);

    // this._positionX = x;
    // this._positionY = y;
    // this._positionZ = z;

    this._mesh.__dirtyPosition = true;
    this._mesh.__dirtyRotation = true;
  }

  setRotation(x, y, z){

    this._mesh.rotation.set(x ,y ,z);

    // this._rotationX = x;
    // this._rotationY = y;
    // this._rotationZ = z;
    //
    this._mesh.__dirtyPosition = true;
    this._mesh.__dirtyRotation = true;

  }

  setScale(x, y, z){
    this._mesh.scale.set(x ,y ,z);
  }

  get x(){
    return this._mesh.position.x;
  }

  get y(){
    return this._mesh.position.y;
  }

  get z(){
    return this._mesh.position.z;
  }

  get rotateX(){
    return this._mesh.rotation.x;
  }

  get rotateY(){
    return this._mesh.rotation.y;
  }

  get rotateZ(){
    return this._mesh.rotation.z;
  }

  get scaleX(){
    return this._mesh.scale.x;
  }

  get scaleY(){
    return this._mesh.scale.y;
  }

  get scaleZ(){
    return this._mesh.scale.z;
  }

  stop(speed){

    const stopVector = new THREE.Vector3(0, 0 , 0);

    this._mesh.setLinearVelocity(stopVector);
    this._mesh.setAngularVelocity(stopVector);

  }

  moveFoward(speed){

    // var angle = this._mesh.up.angleTo(new THREE.Vector3(0,0,0));


    // const rotate = this._mesh.matrix.extractRotation(this._mesh.matrix) ;

    // const rotation = new THREE.Euler().setFromQuaternion( this._mesh.quaternion, "XYZ" );

    const vector = Calc.fowardVector2(this._mesh.rotation.y, speed)

    this._mesh.setLinearVelocity(vector);

    // this.setPosition(this._mesh.position.x + vector.x,
    //                  this._mesh.position.y + vector.y,
    //                  this._mesh.position.z + vector.z);

    // const vector = Calc._fowardVector2(this._mesh.rotation.y, speed*5)
    // this._mesh.setLinearVelocity(vector);
  }

  turnRight(speed){

    console.log(this._mesh.rotation);

    this._mesh.rotation.order = "YXZ";
    this._mesh.setAngularVelocity(new THREE.Vector3(0, speed , 0));
    this._mesh.__dirtyRotation = true;

    // console.log(this._mesh);
    // console.log(this._mesh.rotation.y);
    // this.setRotation(this._mesh.rotation.x,
    //                  this._mesh.rotation.y - speed, // - Math.PI * 0.5 / 180, //speed,
    //                  this._mesh.rotation.z);

    // this.setRotation(this._mesh.rotation.x,
    //                   this._mesh.rotation.y - speed - Math.PI * 0.5 / 180, //speed,
    //                   this._mesh.rotation.z);

  }

  turnLeft(speed){

    this.turnRight(-1*speed);

  }

  get mesh() {

    return this._mesh;

  }


}

export default ViewObject;
