class ViewWorld {

  constructor(targetHtmlElement, viewCamera){

    this._renderer = new THREE.WebGLRenderer();
    this._renderer.setClearColor( 0xafeeee);
    this._viewCamera = viewCamera;


    // viewCamera.setPosition(0, 0, 100); // debug

    this.fitToWindowSize();

    targetHtmlElement.appendChild(this._renderer.domElement);

  }

  fitToWindowSize(){

    this._renderer.setSize(window.innerWidth, window.innerHeight);

  }

  cameraAttachToPlayer(player){
    this._viewCamera.cameraAttachToPlayer(player);
  }

  render(scene){

    this._viewCamera.render();

    this._renderer.render(scene, this._viewCamera.camera);

  }

}

export default ViewWorld;
