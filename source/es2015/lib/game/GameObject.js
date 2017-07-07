import ViewObject      from '../view/ViewObject.js';

class GameObject {

  constructor(viewObject){

    console.assert(viewObject instanceof ViewObject, "argument error");

    this._viewObject = viewObject;

  }

  clone(){
      return new GameObject(this._viewObject.clone());
  }

  setPosition(x, y, z){
    this._viewObject.setPosition(x, y, z);
  }

  setRotation(x, y, z){
    this._viewObject.setRotation(x, y, z);
  }

  setScale( x, y, z){
    this._viewObject.setScale(x, y, z);
  }

  get viewObject() {
    return this._viewObject;
  }

  get x(){
    return this._viewObject.x;
  }

  get y(){
    return this._viewObject.y;
  }

  get z(){
    return this._viewObject.z;
  }

  get rotateX(){
    return this._viewObject.rotateX;
  }

  get rotateY(){
    return this._viewObject.rotateY;
  }

  get rotateZ(){
    return this._viewObject.rotateZ;
  }

  get scaleX(){
    return this._viewObject.scaleX;
  }

  get scaleY(){
    return this._viewObject.scaleY;
  }

  get scaleZ(){
    return this._viewObject.scaleZ;
  }

  // static async asyncLoadFromJSON(filePath){
  //
  //   const viewObject = await ViewObject.asyncLoadFromJSON(filePath);
  //
  //   const gameObject = new GameObject(viewObject);
  //
  //   return gameObject;
  //
  // }
}
export default GameObject;
