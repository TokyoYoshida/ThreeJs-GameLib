import GameWorldBuilder from '../lib/game/GameWorldBuilder.js'

class Chat3d {

  _gameWorld = null;

  constructor(){

    this.createAllData();

  }

  async createAllData(){

    this._gameWorld = GameWorldBuilder.createSimpleWorld(document.body);
    await this._gameWorld.loadGameScene();
    this._gameWorld.cameraAttachToPlayer();

  }

  start(){

    this._gameWorld.mainLoop();

  }
}

export default Chat3d;
