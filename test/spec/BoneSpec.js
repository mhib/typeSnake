describe("Bone", function() {
  var snake, bone;

  beforeEach(function() {
    snake = new Snake
    bone = new Bone(snake, Board.find(2, 2))
  })

  describe("initialization", function() {
    describe("head", function() {
      it("assigns values", function() {
        expect(snake.bones[0]).toBe(bone)
        expect(bone.isHead()).toBe(true)
        expect(Board.findByCoords(bone.coords()).is_snake).toBe(true)
      })
    })

    describe("not head", function() {
      it("assigns value", function() {
        var second = new Bone(snake, Board.find(3, 2))
        expect(snake.bones[1]).toBe(bone)
        expect(snake.bones[0]).toBe(second)
      })
    })
  })

  describe("isHead", function() {
    it("checks if bone is head", function() {
      var s = new Snake
      var b = new Bone(snake, Board.find(1, 1))
      expect(b.isHead()).toBe(true)
      new Bone(snake, Board.find(1, 2))
      expect(b.isHead()).toBe(false)
    })
  })

  describe("unbone", function() {
    it("set squares is_snake to false", function() {
      var s = new Snake
      var b = new Bone(snake, Board.find(1, 1))
      expect(Board.findByCoords(b.coords()).is_snake).toBe(true)
      b.unbone()
      expect(Board.findByCoords(b.coords()).is_snake).toBe(false)
    })
  })
})
