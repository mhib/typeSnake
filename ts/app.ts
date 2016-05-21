/// <reference path='square.ts'/>
/// <reference path='bone.ts'/>
/// <reference path='snake.ts'/>
/// <reference path='keyboard_handler.ts'/>
/// <reference path='saver.ts'/>
/// <reference path='board_generator.ts'/>

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
  document.getElementById("generator_form").addEventListener("submit", function(e) {
    e.preventDefault()
    document.getElementById("generator_form").classList.toggle("hidden")
    let widthInput  = <HTMLInputElement>document.getElementById("width")
    let lengthInput = <HTMLInputElement>document.getElementById("length")
    let width = +widthInput.value
    let length = +widthInput.value
    BoardGenerator.generate(width, length)
  }, false)
  setInterval(function() {
    if(!Board.snake.lost && !Board.paused) {
      Board.snake.move()
    } else {
      return ;
    }
  }, 100)
}

ready(onReady)
