class PhysijsFactory {

  static makeBoxMesh(geo, mat, weight){
    return new Physijs.BoxMesh(geo, mat, weight)
  }

  static makePlaneMesh(geo, mat, weight){
    return new Physijs.PlaneMesh(geo, mat, weight)
  }

}

export default PhysijsFactory;
