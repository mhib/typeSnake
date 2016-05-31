/// <reference path='square.ts'/>
/// <reference path='bone.ts'/>
/// <reference path='snake.ts'/>
/// <reference path='app.ts'/>
/// <reference path='board.ts'/>

class Saver {
  static save() : void {
    localStorage["save_snake"] = JSON.stringify(Board.snake.serialize())
    localStorage["save_board"] = document.getElementById("board").innerHTML
    localStorage["board_length"] = Board.LENGTH
    localStorage["board_width"] = Board.WIDTH
  }

  static load() : boolean {
    if(!localStorage["save_snake"] || !localStorage["save_board"]) {
      return false;
    }
    document.getElementById("board").innerHTML = localStorage["save_board"]
    localStorage.removeItem("save_board")
    Board.LENGTH = +localStorage["board_length"]
    Board.WIDTH = +localStorage["board_width"]
    Board.NUMBER_OF_SQUARES = Board.WIDTH * Board.LENGTH
    Board.prepareMatrix()
    Board.refreshFood()
    Board.snake = Snake.loadFromMap(JSON.parse(localStorage["save_snake"]))
    localStorage.removeItem("save_snake")
    Board.togglePause()
    return true
  }
}
