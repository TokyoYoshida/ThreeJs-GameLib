import FieldObject        from './FieldObject.js';
import ViewObject         from '../view/ViewObject.js';
import JSONObjectLoader   from './JSONObjectLoader.js';
import OBJObjectLoader    from './OBJObjectLoader.js';
import Position           from '../support/Position.js';
import Rotation           from '../support/Rotation.js';
import Scale              from '../support/Scale.js';
import PhysjsFactory      from '../physics/PhysjsFactory.js';
import Calc               from '../support/Calc.js';

class GameFieldLoader {

  static async asyncLoad(gameScene){

    const mapFieldBlockScaleX = 1;
    const mapFieldBlockScaleY = 1;
    const mapFieldBlockScaleZ = 1;

    const mapFieldBlockSizeX = 1;
    const mapFieldBlockSizeY = 1;
    const mapFieldBlockSizeZ = 1;

    const fieldObjects = await this.asyncLoadFieldObjects()
    const fieldMap = this.fieldMap;

    for( let y = 0 ; y < fieldMap.length ; y++){

      console.log("y=");
      console.log(y);

      for( let z = 0 ; z < fieldMap[y].length ; z++){

        for( let x = 0 ; x < fieldMap[y][z].length ; x++){

          // console.log(fieldMap[y][z][x]);
          // console.log(fieldObjects[fieldMap[y][z][x]]);
          if(fieldObjects[fieldMap[y][z][x]] !== null) {
            console.log("set");
            console.log(fieldMap[y][z][x]);
            console.log(x * mapFieldBlockSizeX);
            console.log(y * mapFieldBlockSizeY);
            console.log(z * mapFieldBlockSizeZ);
            const fieldObject = fieldObjects[fieldMap[y][z][x]].clone();

            fieldObject.setScale   (fieldObject.scaleX * mapFieldBlockScaleX,
                                    fieldObject.scaleY * mapFieldBlockScaleY,
                                    fieldObject.scaleZ * mapFieldBlockScaleZ);

            fieldObject.setPosition(fieldObject.x + x * mapFieldBlockSizeX,
                                    fieldObject.y + y * mapFieldBlockSizeY,
                                    fieldObject.z + z * mapFieldBlockSizeZ);

            gameScene.addGameObject(fieldObject);

          }
        }

      }

    }


    return fieldObjects;
  }

  static async _asyncLoadFieldObjects(){

    // const files       = [null,"./model/suzanneqq.json"];
    const files       = [null,"./model/road.json","./model/road_plane.json"];
    const fieldObjects = [];


    for(let i = 0 ; i < files.length ; i++){

      const file = files[i];

      if( file!= null){

        fieldObjects[i] = await FieldObject.asyncLoadFromJSON(files[i]);

      } else {

        fieldObjects[i] = null;

      }
    }

    return fieldObjects;

  }

  static async asyncLoadFieldObjects(){

    const normalPosition = new Position(0,   0,   0);
    const upPosition     = new Position(0, 0.55, 0.725);

    const normalRotation     = new Rotation(                             0,         0,    0);
    const right90Rotation    = new Rotation(                             0, Math.PI/2,    0);
    const topMinus45Rotation = new Rotation(-1 * Calc.angleToRadian(26.57),         0,    0);

    const normalScale = new Scale(    1,    1,    1);
    const smallScale  = new Scale( 0.01, 0.01, 0.01);
    const longScale   = new Scale(    1,    1, 2.24);

    console.log(" is Physijs.BoxMesh")
    console.log(Physijs.BoxMesh)

    const loders = [
      null,
      new JSONObjectLoader("./model/road.json",                    PhysjsFactory.makeBoxMesh, normalPosition, normalRotation    ,  normalScale, 0 ), // normal road
      new JSONObjectLoader("./model/road.json",                    PhysjsFactory.makeBoxMesh, normalPosition, right90Rotation   , normalScale, 0 ),  // normal road(45)
      new JSONObjectLoader("./model/road_plane.json",              PhysjsFactory.makeBoxMesh, normalPosition, normalRotation    ,  normalScale, 0 ), // plane
      new JSONObjectLoader("./model/road.json",                    PhysjsFactory.makeBoxMesh, upPosition    , topMinus45Rotation,  longScale, 0 ),   // slope road
      new OBJObjectLoader ("./model/", "Tree2.mtl", "Tree2.obj",   normalPosition            , normalRotation,  normalScale, 0 ),                    // tree
      new OBJObjectLoader ("./model/", "bridge.mtl", "bridge.obj", new Position(0.5, 0, -0.5), normalRotation,  smallScale,  0 )                     // bridge
    ];

    const fieldObjects = [];

    for(let i = 0 ; i < loders.length ; i++){

      const loader = loders[i];

      if( loader != null){

        const viewObjct = await loader.asyncLoad();
        fieldObjects[i] = new FieldObject(viewObjct);

        console.log("fields");
        console.log(fieldObjects[i]);


      } else {

        fieldObjects[i] = null;

      }
    }

    return fieldObjects;

  }

  static get fieldMap(){

    return [
      [
        [ 3, 2, 2, 3],
        [ 1, 5, 1, 1],
        [ 1, 5, 1, 1],
        [ 1, 5, 1, 1],
        [ 1, 5, 1, 1],
        [ 1, 2, 2, 1],
        [ 1, 5, 0, 4],
        [ 1, 5, 0, 0],
        [ 1, 5, 0, 0],
        [ 1, 5, 0, 0],
        [ 1, 5, 0, 0],
        [ 1, 2, 2, 1]
      ],
      [
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 4],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 1, 2, 2, 3]
      ],
      [
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 1],
        [ 3, 2, 2, 1],
        [ 1, 0, 0, 0],
        [ 1, 0, 0, 0],
        [ 1, 0, 0, 0],
        [ 1, 0, 0, 0],
        [ 1, 0, 0, 1],
        [ 1, 2, 2, 3]
      ]
    ];
  }

  static get modelFileNameMap(){

    return { 0 : "space.json" ,1 : "road.json"};

  }
}
export default GameFieldLoader;
