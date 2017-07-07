import GameObject from './GameObject.js'
import PlayerObjects from './PlayerObjects.js'

class GameWorld {

  constructor(viewWorld ,physicsWorld ,gameScene) {

    this.initializeWorld(viewWorld ,physicsWorld ,gameScene);

  }

  initializeWorld(viewWorld ,physicsWorld, gameScene){

    this._viewWorld    = viewWorld;
    this._physicsWould = physicsWorld;
    this._gameScene    = gameScene;

  }

  async loadGameScene(){

    await this._gameScene.load();

  }

  cameraAttachToPlayer(){

    const mainPLayer =this._gameScene.mainPlayer;
    this._viewWorld.cameraAttachToPlayer(mainPLayer);

  }

  addGameObject(gameObject){

    this._gameScene.addGameObject(gameObject.viewObject);

  }

  addPlayerObject(playerObject){

    this._gameScene.addGameObject(playerObject.viewObject);

  }

  mainLoop(){

    const i = 0;

    const _this = this;

    console.log("start rendering.");

    _this._gameScene._viewScene._scene.addEventListener('update', function(){
      _this._gameScene.render(); // this method must call after Physijs's scene update event
      // _this._gameScene._playerObjects._playerObjects[0]._viewObject._mesh.__dirtyPosition = true
      // _this._gameScene._playerObjects._playerObjects[0]._viewObject._mesh.__dirtyRotation = true
    });

    function animate() {

      requestAnimationFrame(animate);

      // _this._gameScene.render(); // this method must call after Physijs's simurete() method

      _this._gameScene._viewScene._scene.simulate();

      // _this._gameScene.render(); // this method must call after Physijs's simurete() method

      _this._viewWorld.render(_this._gameScene.scene);

    }

    animate();
  }

}
export default GameWorld;
