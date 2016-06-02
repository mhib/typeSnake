describe("Square", function() {
  var square
  beforeEach(function() {
    square = Board.find(1, 1)
  })

  describe("coords", function() {
    it("returns coords", function() {
      var c = square.coords()
      expect(c.x).toEqual(square.x)
      expect(c.x).toEqual(square.y)
    })
  })

  describe("bone and unbone", function() {
    it("adds and removes bone class", function() {
      var d = square.div
      square.bone()
      expect(d.classList.contains("bone")).toBe(true)
      square.unbone()
      expect(d.classList.contains("bone")).toBe(false)
    })
    it("changes is_snake attribute", function() {
      expect(square.is_snake).toBe(false)
      square.bone()
      expect(square.is_snake).toBe(true)
      square.unbone()
      expect(square.is_snake).toBe(false)
    })
  })

  describe("makeFood and unfood", function() {
    it("adds and removes food class", function() {
      var d = square.div
      square.makeFood()
      expect(d.classList.contains("food")).toBe(true)
      square.unfood()
      expect(d.classList.contains("food")).toBe(false)
    })
    it("changes food attribute", function() {
      expect(square.food).toBe(false)
      square.makeFood()
      expect(square.food).toBe(true)
      square.unfood()
      expect(square.food).toBe(false)
    })
  })

  describe("head and unhead", function() {
    it("adds and removes head class", function() {
      var d = square.div
      square.head()
      expect(d.classList.contains("head")).toBe(true)
      square.unhead()
      expect(d.classList.contains("head")).toBe(false)
    })
  })

})
