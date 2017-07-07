import PlayerObjects    from './PlayerObjects.js';
import PlayerObject     from './PlayerObject.js';
import JSONObjectLoader from './JSONObjectLoader.js';
import Position         from '../support/Position.js';
import Rotation         from '../support/Rotation.js';
import Scale            from '../support/Scale.js';
import PhysjsFactory      from '../physics/PhysjsFactory.js';


class PlayerLoader {

  static async asyncLoad(gameScene){

    console.log("load player start");

    const playerScaleX = 0.1;
    const playerScaleY = 0.1;
    const playerScaleZ = 0.1;

    const playerObjects = new PlayerObjects();


    let loader = new JSONObjectLoader("./model/toyota.json",
                        PhysjsFactory.makeBoxMesh,
                        new Position(0, 0.6, 0),
                        new Rotation(0, Math.PI, 0),
                        new Scale(playerScaleX, playerScaleY, playerScaleZ),
                        1);

    const viewObject = await loader.asyncLoad();


    const player1   = new PlayerObject(viewObject);


    console.log("load player");

    gameScene.addPlayerObject(player1);

  }
}
export default PlayerLoader;
