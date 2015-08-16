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
        expect(bone.square.snake).toBe(true)
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
})
