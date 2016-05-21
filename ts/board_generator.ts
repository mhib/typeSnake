/// <reference path='board.ts'/>
/// <reference path='bone.ts'/>
/// <reference path='snake.ts'/>
class BoardGenerator {
  static generate(width: number, length: number) : void {
    var prevPause = Board.paused
    BoardGenerator.prepareBoard(width, length)
    var boardC = document.getElementById("board-container")
    boardC.innerHTML = ""
    var boardDiv = document.createElement("div")
    boardDiv.setAttribute("id", "board")
    boardC.appendChild(boardDiv)
    for(var y = 1; y <= length; y += 1) {
      var row = document.createElement("div")
      row.setAttribute("class", "row")
      for(var x = 1; x <= width; x += 1) {
        row.appendChild(BoardGenerator.generateSquare(x, y))
      }
      boardDiv.appendChild(row)
    }
    Board.prepareMatrix()
    Board.paused = prevPause
    BoardGenerator.addSnake()
  }

  static generateSquare(x: number, y: number) : HTMLElement {
    var square = document.createElement("div")
    square.setAttribute("class", "square" + " " + "square-" + x + "-" + y)
    square.setAttribute("data-x", x + "")
    square.setAttribute("data-y", y + "")
    return square
  }

  static prepareBoard(width: number, length: number) : void {
    Board.paused = true
    Board.WIDTH = width
    Board.LENGTH = length
    Board.NUMBER_OF_CELLS = width * length
  }

  static addSnake() : void {
    Board.snake = new Snake
    var r_s = Board.random_square()
    new Bone(Board.snake, r_s)
    new Bone(Board.snake, Board.find(r_s.x + 1, r_s.y))
    Board.addFood()
  }
}
