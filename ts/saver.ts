/// <reference path='square.ts'/>
/// <reference path='bone.ts'/>
/// <reference path='snake.ts'/>
/// <reference path='app.ts'/>

class Saver {
  static save() : void {
    localStorage["save_snake"] = JSON.stringify(Board.snake.serialize())
    localStorage["save_board"] = document.getElementById("board").innerHTML
  }

  static load() : boolean {
    if(!localStorage["save_snake"] || !localStorage["save_board"]) {
      return false;
    }
    document.getElementById("board").innerHTML = localStorage["save_board"]
    localStorage.removeItem("save_board")
    Board.prepareMatrix()
    Board.refreshFood()
    Board.snake = Snake.loadFromMap(JSON.parse(localStorage["save_snake"]))
    localStorage.removeItem("save_snake")
    Board.togglePause()
    return true
  }
}
