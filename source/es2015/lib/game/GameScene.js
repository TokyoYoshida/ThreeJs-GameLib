import CubeObject      from './CubeObject.js';
import GameFieldLoader from './GameFieldLoader.js';
import PlayerObject    from './PlayerObject.js';
import PlayerObjects   from './PlayerObjects.js';
import PlayerLoader    from './PlayerLoader.js';

class GameScene {
  constructor(viewScene) {

    this._playerObjects = new PlayerObjects();

    this._viewScene = viewScene;

  }

  addNormalLight(light){

    this._viewScene.addNormalLight(light);

  }

  addAmbientLight(light){

    this._viewScene.addAmbientLight(light);

  }

  addGameObject(object){

    this._viewScene.addViewObject(object.viewObject);

  }

  addPlayerObject(object){

    console.assert(object instanceof PlayerObject, "argument error");

    console.log("add player");

    this._playerObjects.push(object);
    this._viewScene.addViewObject(object.viewObject);

  }

  render(){
    this._playerObjects.render();
  }

  async load(){

    await this.fieldLoad();
    await this.playerLoad();

  }

  async fieldLoad(){

    await GameFieldLoader.asyncLoad(this);

  }

  async playerLoad(){

    await PlayerLoader.asyncLoad(this);

  }

  get scene() {

    return this._viewScene.scene;

  }

  get mainPlayer(){
    return this._playerObjects.mainPlayer;
  }

}
export default GameScene;
