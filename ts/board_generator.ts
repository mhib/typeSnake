/// <reference path='board.ts'/>
/// <reference path='bone.ts'/>
/// <reference path='snake.ts'/>
class BoardGenerator {
  static generate(width: number, height: number) : void {
    var prevPause = Board.paused
    BoardGenerator.prepareBoard(width, height)
    var boardC = document.getElementById("board-container")
    boardC.innerHTML = ""
    var boardDiv = document.createElement("div")
    boardDiv.setAttribute("id", "board")
    boardC.appendChild(boardDiv)
    for(var y = 1; y <= height; y += 1) {
      var row = document.createElement("div")
      row.setAttribute("class", "row")
      for(var x = 1; x <= width; x += 1) {
        row.appendChild(BoardGenerator.generateSquare(x, y))
      }
      boardDiv.appendChild(row)
    }
    Board.prepareMatrix()
    var board_div = document.getElementById("board")
    board_div.style.height = height * 12 + "px"
    board_div.style.width = width * 12 + "px"
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

  static prepareBoard(width: number, height: number) : void {
    Board.paused = true
    Board.WIDTH = width
    Board.LENGTH = height
    Board.NUMBER_OF_SQUARES = width * height
  }

  static addSnake() : void {
    Board.snake = new Snake
    var r_s = Board.randomSquare()
    new Bone(Board.snake, r_s)
    new Bone(Board.snake, Board.find(r_s.x + 1, r_s.y))
    Board.addFood()
  }
}
