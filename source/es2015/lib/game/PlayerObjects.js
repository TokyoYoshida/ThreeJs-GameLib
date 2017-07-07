class PlayerObjects {
  constructor(){

    this._playerObjects = [];
  }

  push(playerObject){
    this._playerObjects.push(playerObject);
  }

  render(){
    this._playerObjects.forEach( (value,index,array) => {
        value.render();
    });
  }

  get mainPlayer(){
    return this._playerObjects[0];
  }

}

export default PlayerObjects;
