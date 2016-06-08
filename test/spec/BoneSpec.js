describe("Bone", function() {
  var snake, bone;

  beforeEach(function() {
    snake = new Snake
    bone = new Bone(Board.find(2, 2))
    snake.addBone(bone)
  })

  describe("initialization", function() {
    describe("head", function() {
      it("assigns values", function() {
        expect(snake.bones[0]).toBe(bone)
        expect(Board.findByCoords(bone.coords()).is_snake).toBe(true)
      })
    })

    describe("not head", function() {
      it("assigns value", function() {
        var second = new Bone(Board.find(3, 2))
        snake.addBone(second)
        expect(snake.bones[1]).toBe(bone)
        expect(snake.bones[0]).toBe(second)
      })
    })
  })

  describe("unbone", function() {
    it("set squares is_snake to false", function() {
      expect(Board.findByCoords(bone.coords()).is_snake).toBe(true)
      bone.unbone()
      expect(Board.findByCoords(bone.coords()).is_snake).toBe(false)
    })
  })

  describe("head and unhead", function() {
    it("adds and removes head class", function() {
      var d = bone.div
      bone.head()
      expect(d.classList.contains("head")).toBe(true)
      bone.unhead()
      expect(d.classList.contains("head")).toBe(false)
    })
  })
})
