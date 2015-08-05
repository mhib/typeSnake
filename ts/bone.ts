/// <reference path='board.ts'/>
/// <reference path='snake.ts'/>
class Bone {
  static MOVES = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 }
  }

  snake: Snake
  square: Square

  constructor(snake: Snake, square: Square) {
    this.snake = snake
    this.square = square
    this.square.bone()
    this.snake.add_bone(this)
    this.square.head()
  }

  coords() {
    return this.square.coords()
  }

  new_coords(direction = this.snake.direction) {
    var dest = Bone.MOVES[direction]
    return {
      x: this.square.x + dest['x'],
      y: this.square.y + dest['y']
    }
  }

  isHead() : boolean {
    return this.snake.head() === this
  }

  unhead() {
    this.square.unhead()
  }
}
