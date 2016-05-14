/// <reference path='square.ts'/>
/// <reference path='bone.ts'/>
/// <reference path='snake.ts'/>
/// <reference path='keyboard_handler.ts'/>
/// <reference path='saver.ts'/>

function ready(fn) {
  if (document.readyState != 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

function onReady() {
  Board.snake = new Snake
  Board.prepareMatrix()
  new Bone(Board.snake, Board.find(20, 20))
  new Bone(Board.snake, Board.find(21, 20))
  new Bone(Board.snake, Board.find(22, 20))
  new Bone(Board.snake, Board.find(23, 20))
  new Bone(Board.snake, Board.find(24, 20))
  new Bone(Board.snake, Board.find(25, 20))
  Board.addFood()
  document.addEventListener('keydown', function(e) {
    KeyboardHandler.handle(Board.snake, e);
  })
  setInterval(function() {
    if(!Board.snake.lost && !Board.paused) {
      Board.snake.move()
    } else {
      return ;
    }
  }, 100)
}

ready(onReady)
