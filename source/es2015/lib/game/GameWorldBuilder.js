import GameWorld          from './GameWorld.js';
import GameScene          from './GameScene.js';
import ViewWorld          from '../view/ViewWorld.js';
import ViewScene          from '../view/ViewScene.js';
import FirstParsonCamera  from '../view/FirstParsonCamera.js';
import ThirdParsonCamera  from '../view/ThirdParsonCamera.js';
import SmoothParsonCamera from '../view/SmoothParsonCamera.js';
import FixCamera          from '../view/FixCamera.js';


class GameWorldBuilder {

  static createSimpleWorld(targetHtmlElement) {
    // View
    Physijs.scripts.worker = './javascript/physijs_worker.js';
    Physijs.scripts.ammo   = './ammo.js';

    // const camera       = new FirstParsonCamera();
    // const camera       = new ThirdParsonCamera();
    // const camera       = new FixCamera(0 ,0.6 ,1);
    const camera       = new SmoothParsonCamera();
    const viewWorld    = new ViewWorld(targetHtmlElement, camera);

    // Physics
    const physicsWorld = null;
    
    // Scene
    const gameScene    = GameWorldBuilder.createSimpleScene(targetHtmlElement);

    // World
    const gameWorld    = new GameWorld(viewWorld, physicsWorld, gameScene);

    return gameWorld;

  }

  static createSimpleScene(targetHtmlElement) {

    const simpleViewScene  = new ViewScene();
    const simpleGameScene  = new GameScene(simpleViewScene);

    // simpleGameScene.addNormalLight (new THREE.DirectionalLight(0xcccccc));
    // simpleGameScene.addAmbientLight(new THREE.AmbientLight(0x333333));

    simpleGameScene.addNormalLight (new THREE.DirectionalLight(0xFFFFFF));
    simpleGameScene.addAmbientLight(new THREE.AmbientLight    (0xFFFFFF));

    return simpleGameScene;
  }
}

export default GameWorldBuilder;
