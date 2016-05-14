/// <reference path='snake.ts'/>
/// <reference path='board.ts'/>
class KeyboardHandler {
  static MOVEMENTS = {
      // arrows
      38: "up",
      40: "down",
      37: "left",
      39: "right",
      // vim
      75: "up",
      74: "down",
      72: "left",
      76: "right",
      // wsad
      87: "up",
      83: "down",
      65: "left",
      68: "right",
      // numpad
      104: "up",
      98:  "down",
      100: "left",
      102: "right"
  }

  static PAUSE = {
    80: true
  }

  static handle(snake: Snake, e: KeyboardEvent) : void {
    var kcode = +e.keyCode
    var dir
    if (dir = this.MOVEMENTS[kcode]) {
      snake.direction = dir
      e.preventDefault()
    } else if(this.PAUSE[kcode]) {
      Board.togglePause()
    }
  }

}
