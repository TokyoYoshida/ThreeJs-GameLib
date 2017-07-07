class ObjectLoader  {

  constructor(position, rotation, scale, weight){

    console.assert(position != null, "argument error");
    console.assert(rotation != null, "argument error");
    console.assert(scale    != null, "argument error");

    this.position = position;
    this.rotation = rotation;
    this.scale    = scale;
    this.weight   = weight;
  }

  initObject(viewObject){

    viewObject.setPosition(...this.position);
    viewObject.setRotation(...this.rotation);
    viewObject.setScale   (...this.scale);

  }

}

export default ObjectLoader;
