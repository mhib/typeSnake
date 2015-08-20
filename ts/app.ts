/// <reference path='square.ts'/>
/// <reference path='bone.ts'/>
/// <reference path='snake.ts'/>
var snake = new Snake
Board.prepare_matrix()
new Bone(snake, Board.find(20, 20))
new Bone(snake, Board.find(21, 20))
new Bone(snake, Board.find(22, 20))
new Bone(snake, Board.find(23, 20))
new Bone(snake, Board.find(24, 20))
new Bone(snake, Board.find(25, 20))
Board.addFood()
let movements = {
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
document.addEventListener('keydown', function(e) {
  var dir
  if (dir = movements[+e.keyCode]) {
    snake.direction = dir
    e.preventDefault()
  }
})
setInterval(function() {
  if(!snake.lost) {
  snake.move()
  } else {
    return ;
  }
}, 100)

