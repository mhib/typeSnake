/// <reference path='square.ts'/>
/// <reference path='bone.ts'/>
class Snake {
  bones: Array<Bone>
  private _direction: string
  lost: boolean
  constructor(direction = 'right') {
    this.bones = []
    this.lost = false
    this._direction = direction
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
    var eaten = false
    var n_c = this.head().new_coords()
    var new_square = Board.find(n_c["x"], n_c["y"])
    if (new_square.food) {
      new_square.unfood()
      eaten = true
      Board.addFood()
    }
    if (!eaten) {
      this.popLast()
    }
    if (new_square.snake) {
      return this.lose()
    }
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
    if (this.direction === dir) {
      return false
    }
    if (dir === Board.OPPOSITE_DIRECTION[dir]) {
      return false
    }
    return true
  }

  popLast() : void {
    var bone = this.bones[this.bones.length - 1]
    this.bones.pop()
    bone.square.unbone()
  }

  lose() : void {
    this.lost = true
  }

  won() : boolean {
    return this.bones.length == Board.NUMBER_OF_CELLS
  }
}
