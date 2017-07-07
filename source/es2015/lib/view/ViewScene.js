import ViewObject      from './ViewObject.js';


class ViewScene {

  constructor(){
    this._scene =  new Physijs.Scene();
    // this._scene =  new Physijs.Scene({ reportsize: 50, fixedTimeStep: 1 / 20 });
    this._scene.setGravity(new THREE.Vector3(0,-5,0));
    // this._scene =  new THREE.Scene();
  }

  addNormalLight(light){

    this._normalLight = light;
    this._scene.add(light);

  }

  addAmbientLight(light){

    this._ambientLight = light;
    this._scene.add(light);

  }

  addViewObject(viewObject){

    console.assert(viewObject instanceof ViewObject, "argument error");

    console.log("sceneadd");
    console.log(viewObject);

    this._scene.add(viewObject.mesh);

  }

  load(){


  }

  get scene() {
    return this._scene;
  }
}
export default ViewScene;
