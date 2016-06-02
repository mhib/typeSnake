/// <reference path='board.ts'/>
/// <reference path='snake.ts'/>
class Bone extends Square {
  static MOVES = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 }
  }

  snake: Snake
  is_snake = true

  constructor(snake: Snake, square: Square) {
    super(square.x, square.y, square.div)
    square.bone()
    this.snake = snake
    this.snake.addBone(this)
    this.head()
    this.unbone = function() { square.unbone() }
  }

  newCoords(direction = this.snake.direction) {
    var dest = Bone.MOVES[direction]
    return {
      x: this.x + dest['x'],
      y: this.y + dest['y']
    }
  }

  isHead() : boolean {
    return this.snake.head() === this
  }
}
