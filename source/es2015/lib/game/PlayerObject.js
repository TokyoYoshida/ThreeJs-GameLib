import GameObject from './GameObject.js';
import ViewObject from '../view/ViewObject.js';

class PlayerObject extends GameObject {
  constructor(viewObject){

    super(viewObject);

    this._x = 0;
    this._y = 0;
    this._z = 0;

    this._keyCode = null;

    const onKeyDownHandler = () => {
      this._keyCode = event.keyCode;
    }

    const onKyeUpHandler = () => {
      this._keyCode = null;
    }

    window.document.onkeydown = onKeyDownHandler;
    window.document.onkeyup   = onKyeUpHandler;

  }

  setPosition(x, y, z){
    super.setPosition(x, y, z);

    this._x = x;
    this._y = y;
    this._z = z;

  }

  stop(){

    this._viewObject.stop();

  }

  moveFoward(){

    this._viewObject.moveFoward(2);

  }

  turnRight(){

    this._viewObject.turnRight(2);

  }

  turnLeft(){

    this._viewObject.turnLeft(2);
  }

  clone(){
      return new PlayerObject(this._viewObject.clone());
  }

  render(){

    const keyCodeUp    = 38;
    const keycodeRight = 39;
    const keyCodeDown  = 40;
    const keycodeLeft  = 37;

    // this.stop();

    if(this._keyCode == keyCodeUp){ //up

      this.moveFoward();

    }

    if(this._keyCode == keycodeRight){ //right

      this.turnLeft();

    }

    if(this._keyCode == keycodeLeft){ //left

      this.turnRight();

    }

  }

  // static async asyncLoadFromJSON(filePath){
  //
  //   const viewObject = await ViewObject.asyncLoadFromJSON(filePath);
  //
  //   const playerObject = new PlayerObject(viewObject);
  //
  //   return playerObject;
  //
  // }
}

export default PlayerObject;
