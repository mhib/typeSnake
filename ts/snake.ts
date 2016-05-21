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

  add_bone(bone: Bone) {
    if (this.head()) {
      this.head().unhead()
    }
    this.bones.unshift(bone)
  }

  head() : Bone {
    return this.bones[0]
  }

  move() : void {
    var n_c = this.head().new_coords()
    var new_square = Board.find(n_c["x"], n_c["y"])
    if (new_square.food) {
      new_square.unfood()
      Board.addFood()
    } else {
      this.popLast()
    }
    if (new_square.snake) {
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
    return this.bones.length === Board.NUMBER_OF_CELLS
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
    map["bones"].reverse().forEach(function(bone) {
      new Bone(snake, Board.find(bone['x'], bone['y']))
    })
    return snake
  }
}
