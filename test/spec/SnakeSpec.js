describe("Snake", function() {
  var snake;
  beforeEach(function() {
    snake = new Snake("right")
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

  describe("changing direction", function() {
    it("changes direction when it is valid", function() {
      snake.direction = "up"
      expect(snake.direction).toBe("up")
    })
    it("does not change direction when it is invalid", function() {
      snake.direction = "left"
      expect(snake.direction).toBe("right")
    })
  })

  describe("move", function() {
    describe("no lost", function() {
      describe("eat", function() {
        it("moves and eats square", function() {
          var b = new Bone(Board.find(1, 1))
          snake.addBone(b)
          var sb = new Bone(Board.find(2, 1))
          snake.addBone(sb)
          Board.find(3, 1).makeFood()
          spyOn(b, "unbone")
          snake.move()
          expect(b.unbone).not.toHaveBeenCalled()
          expect(snake.lost).toBe(false)
        })
      })

      describe("no eat", function() {
        it("moves", function() {
          var b = new Bone(Board.find(1, 1))
          snake.addBone(b)
          var sb = new Bone(Board.find(2, 1))
          snake.addBone(sb)
          Board.find(4, 1).makeFood()
          spyOn(b, "unbone")
          snake.move()
          expect(b.unbone).toHaveBeenCalled()
          expect(snake.lost).toBe(false)
        })

        describe("has same length as board", function() {
          it("does not lose", function() {
            snake.direction = 'right'
            for(var n = 1; n <= 5; n += 1) { snake.addBone(new Bone(Board.find(n, 1))) }
            snake.move()
            expect(snake.lost).toBe(false)
          })
        })
      })
    })

    describe("lost", function() {
      it("loses", function() {
        for(var n = 3; n >= 1; n -= 1) { snake.addBone(new Bone(Board.find(n, 1))) }
        snake.move()
        expect(snake.lost).toBe(true)
      })
    })
  })
})
