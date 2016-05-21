/// <reference path='square.ts'/>
class Board {
  static OPPOSITE_DIRECTION =  {
    left: 'right',
    right: 'left',
    up: 'down',
    down: 'up'
  }
  static WIDTH = 50;
  static LENGTH = 50;
  static NUMBER_OF_CELLS = Board.WIDTH * Board.LENGTH
  static matrix: Array<Array<Square>>
  static paused = false
  static snake

  static prepareMatrix() : void {
    Board.matrix = [];
    for(var y = 1; y <= Board.LENGTH; y += 1) {
      Board.matrix[y] = []
        for(var x = 1; x <= Board.WIDTH; x += 1) {
          Board.matrix[y][x] = new Square(x, y, document.querySelector(".square-" + x + "-" + y))
        }
    }
  }

  static find(x: number, y: number) : Square {
    x = Board.transform(x, "WIDTH")
    y = Board.transform(y, "LENGTH")
    return Board.matrix[y][x]
  }

  static transform(x: number, dim: string) : number {
    if(x === 0) {
      return Board[dim]
    }
    if(x > Board[dim]) {
      return x - Board[dim]
    }
    return x
  }

  static part_of_snake(x: number, y: number) : boolean {
    return Board.find(x, y).snake
  }

  static random_square() : Square {
    var squares: Array<Square> = []
    for(var y = 1; y <= Board.LENGTH; y += 1) {
      for(var x = 1; x <= Board.WIDTH; x += 1) {
        if(Board.matrix[y] && Board.matrix[y][x]) {
          var square = Board.matrix[y][x]
          if (!square.snake) {
            squares.push(square)
          }
        }
      }
    }
    return squares[Math.floor(Math.random()*squares.length)]
  }

  static addFood() : void {
    var square: Square = Board.random_square();
    if (square) {
      square.makeFood()
    }
  }

  static refreshFood() : void {
    var food = document.querySelector(".food")
    Board.find(+food.getAttribute("data-x"), +food.getAttribute("data-y")).makeFood()
  }

  static togglePause() : boolean {
    return Board.paused = !Board.paused
  }
}
