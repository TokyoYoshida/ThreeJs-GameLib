import ObjectLoader from './ObjectLoader.js';
import ViewObject   from '../view/ViewObject.js';

class OBJObjectLoader extends ObjectLoader {

  constructor(path, mtlFilename, objFilename , position, rotation, scale ,weight = 0){

    super(position, rotation, scale ,weight);
    this.path        = path;
    this.mtlFilename = mtlFilename;
    this.objFilename = objFilename;

  }

  asyncLoad(filePath){

		const mtlLoader = new THREE.MTLLoader();

    const objLoader = new THREE.OBJLoader();

    const promise = new Promise((resolve, reject) => {

  	  // mtlLoader.setPath(this.path);
      mtlLoader.load( this.path + this.mtlFilename, ( materials ) => {

      					materials.preload();

      					var objLoader = new THREE.OBJLoader();
      					objLoader.setMaterials( materials );
      					// objLoader.setPath( this.path );

      					objLoader.load( this.path + this.objFilename , ( loadObject ) => {


                  const physiMat    = Physijs.createMaterial( new THREE.MeshPhongMaterial({color: 0xff0000}) );
                  const physiMesh   = new Physijs.BoxMesh(new THREE.BoxGeometry(1,1,1), physiMat ,this.weight);

                  var group = new THREE.Group();
                  group.add(loadObject);
                  group.add(physiMesh);

                  const viewObject = new ViewObject(group);

                  this.initObject(viewObject);

                  resolve(viewObject);

      					},() => {console.log("progress")},() => {console.log("error")});

      				});

    });

    return promise;
  }

}

export default OBJObjectLoader;
