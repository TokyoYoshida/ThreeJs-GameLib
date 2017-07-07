import GameObject from './GameObject.js';
import ViewObject from '../view/ViewObject.js';

class FieldObject extends GameObject {

  constructor(viewObject){

    super(viewObject);

  }

  clone(){
      return new FieldObject(this._viewObject.clone());
  }

  // static async asyncLoadFromJSON(filePath){
  //
  //   const viewObject = await ViewObject.asyncLoadFromJSON(filePath);
  //
  //   const fieldObject = new FieldObject(viewObject);
  //
  //   return fieldObject;
  //
  // }
}

export default FieldObject;
