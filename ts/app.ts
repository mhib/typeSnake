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
  Board.paused = false
  BoardGenerator.generate(50, 50)
  document.addEventListener('keydown', function(e) {
    KeyboardHandler.handle(Board.snake, e);
  })
  document.getElementById("generator_form").addEventListener("submit", function(e) {
    e.preventDefault()
    document.getElementById("generator_form").classList.toggle("hidden")
    let width  = +(<HTMLInputElement>document.getElementById("width")).value
    let length = +(<HTMLInputElement>document.getElementById("length")).value
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
