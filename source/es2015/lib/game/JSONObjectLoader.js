import ObjectLoader from './ObjectLoader.js';
import ViewObject   from '../view/ViewObject.js';


class JSONObjectLoader extends ObjectLoader {

  constructor(jsonFilePath, physjs_mesh_constuctor, position, rotation, scale ,weight = 0){

    super(position, rotation, scale ,weight );
    this.jsonFilePath = jsonFilePath;
    this.physjs_mesh_constuctor = physjs_mesh_constuctor
    console.log(" is this.physjs_mesh_constuctor");
    console.log(this.physjs_mesh_constuctor);

  }

  asyncLoad(){

    const loader = new THREE.JSONLoader();　　

    const promise = new Promise((resolve, reject) => {


      console.log(this.jsonFilePath);

      loader.load(this.jsonFilePath, (geo, mat) => {　　　

        const faceMat    = Physijs.createMaterial( new THREE.MeshFaceMaterial(mat) ,1000 ,1000);

        // const mesh = new Physijs.BoxMesh(geo, faceMat,  this.weight);
        console.log(" isis this.physjs_mesh_constuctor");
        console.log(this.physjs_mesh_constuctor);
        const mesh = this.physjs_mesh_constuctor(geo, faceMat,  this.weight);

        const viewObject = new ViewObject(mesh);

        this.initObject(viewObject);

        resolve(viewObject);

      });
    });

    return promise;
  }

}

export default JSONObjectLoader;
