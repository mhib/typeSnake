/// <reference path='board.ts'/>
class Bone extends Square {
  static MOVES = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 }
  }

  is_snake = true

  constructor(square: Square) {
    super(square.x, square.y, square.div)
    square.bone()
    this.unbone = function() { square.unbone() }
  }

  newCoords(direction : string) : Object {
    var dest = Bone.MOVES[direction]
    return {
      x: this.x + dest['x'],
      y: this.y + dest['y']
    }
  }

  head() : void {
    this.div.classList.add("head")
  }

  unhead() : void {
    this.div.classList.remove("head")
  }
}
