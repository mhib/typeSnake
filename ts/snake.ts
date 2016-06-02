/// <reference path='square.ts'/>
/// <reference path='bone.ts'/>
class Snake {
  bones: Array<Bone>
  private _direction: string
  private _last_direction: string
  lost: boolean
  constructor(direction = 'right') {
    this.bones = []
    this.lost = false
    this._direction = direction
    this._last_direction = direction
  }

  addBone(bone: Bone) : void {
    if (this.head()) {
      this.head().unhead()
    }
    this.bones.unshift(bone)
  }

  head() : Bone {
    return this.bones[0]
  }

  move() : void {
    var new_square = Board.findByCoords(this.head().newCoords())
    if (new_square.food) {
      new_square.unfood()
      Board.addFood()
    } else {
      this.popLast()
    }
    if (new_square.is_snake) {
      return this.lose()
    }
    this._last_direction = this._direction
    new Bone(this, new_square)
  }

  set direction(dir: string) {
    if (this.validDirection(dir)) {
      this._direction = dir
    }
  }

  get direction() : string {
    return this._direction
  }

  validDirection(dir: string) : boolean {
    if (this._last_direction === dir) {
      return false
    }
    if (dir === Board.OPPOSITE_DIRECTION[this._last_direction]) {
      return false
    }
    return true
  }

  popLast() : void {
    this.bones.pop().unbone()
  }

  lose() : void {
    this.lost = true
  }

  won() : boolean {
    return this.bones.length === Board.NUMBER_OF_SQUARES
  }

  serialize() : Object {
    return {
      bones: this.bones.map(function(bone) { return bone.coords() }),
      lost: this.lost,
      direction:this.direction
    }
  }

  static loadFromMap(map: Object) : Snake {
    var snake = new Snake(map["direction"])
    snake.lost = map["lost"]
    map["bones"].reverse().forEach(function(coords) {
      new Bone(snake, Board.findByCoords(coords))
    })
    return snake
  }
}
