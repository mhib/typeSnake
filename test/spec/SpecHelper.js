Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

beforeEach(function() {
  Board.WIDTH = Board.LENGTH = 5;
  document.getElementById("board-container").innerHTML += ['<div id="board">',
     '<div class="row">',
        '<div class="square square-1-1" data-x="1" data-y="1">',
        '</div>',
        '<div class="square square-2-1" data-x="2" data-y="1">',
        '</div>',
        '<div class="square square-3-1" data-x="3" data-y="1">',
        '</div>',
        '<div class="square square-4-1" data-x="4" data-y="1">',
        '</div>',
        '<div class="square square-5-1" data-x="5" data-y="1">',
        '</div>',
      '</div>',
      '<div class="row">',
        '<div class="square square-1-2" data-x="1" data-y="2">',
        '</div>',
        '<div class="square square-2-2" data-x="2" data-y="2">',
        '</div>',
        '<div class="square square-3-2" data-x="3" data-y="2">',
        '</div>',
        '<div class="square square-4-2" data-x="4" data-y="2">',
        '</div>',
        '<div class="square square-5-2" data-x="5" data-y="2">',
        '</div>',
      '</div>',
      '<div class="row">',
        '<div class="square square-1-3" data-x="1" data-y="3">',
        '</div>',
        '<div class="square square-2-3" data-x="2" data-y="3">',
        '</div>',
        '<div class="square square-3-3" data-x="3" data-y="3">',
        '</div>',
        '<div class="square square-4-3" data-x="4" data-y="3">',
        '</div>',
        '<div class="square square-5-3" data-x="5" data-y="3">',
        '</div>',
      '</div>',
      '<div class="row">',
        '<div class="square square-1-4" data-x="1" data-y="4">',
        '</div>',
        '<div class="square square-2-4" data-x="2" data-y="4">',
        '</div>',
        '<div class="square square-3-4" data-x="3" data-y="4">',
        '</div>',
        '<div class="square square-4-4" data-x="4" data-y="4">',
        '</div>',
        '<div class="square square-5-4" data-x="5" data-y="4">',
        '</div>',
      '</div>',
      '<div class="row">',
        '<div class="square square-1-5" data-x="1" data-y="5">',
        '</div>',
        '<div class="square square-2-5" data-x="2" data-y="5">',
        '</div>',
        '<div class="square square-3-5" data-x="3" data-y="5">',
        '</div>',
        '<div class="square square-4-5" data-x="4" data-y="5">',
        '</div>',
        '<div class="square square-5-5" data-x="5" data-y="5">',
        '</div>',
      '</div>',
    '</div>'].join("\n");
    Board.prepareMatrix();
})

afterEach(function() {
  document.getElementById('board').remove();
})
