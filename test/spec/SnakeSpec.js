describe("Snake", function() {
  var snake;
  beforeEach(function() {
    snake = new Snake
  })

  describe("initialization", function() {
    it("assigns attributes", function() {
      expect(snake.lost).toBe(false)
      expect(snake.bones.length).toEqual(0)
    })
  })

  describe("lose", function() {
    it("loses", function() {
      snake.lose()
      expect(snake.lost).toBe(true)
    })
  })

  describe("move", function() {
    describe("no lost", function() {
      describe("eat", function() {
        it("moves and eats square", function() {
          var b = new Bone(snake, Board.find(1, 1))
          var sb = new Bone(snake, Board.find(2, 1))
          Board.find(3, 1).makeFood()
          spyOn(b.square, "unbone")
          snake.move()
          expect(b.square.unbone).not.toHaveBeenCalled()
        })
      })

      describe("no eat", function() {
        it("moves", function() {
          var b = new Bone(snake, Board.find(1, 1))
          var sb = new Bone(snake, Board.find(2, 1))
          Board.find(4, 1).makeFood()
          spyOn(b.square, "unbone")
          snake.move()
          expect(b.square.unbone).toHaveBeenCalled()
        })
      })
    })
  })
})
