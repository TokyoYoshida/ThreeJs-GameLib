class Coordinate  {

  constructor(x, y, z){

    this.x = x;
    this.y = y;
    this.z = z;

  }

  *[Symbol.iterator]()
  {
    yield* [this.x, this.y ,this.z];
  }

}

export default Coordinate;
