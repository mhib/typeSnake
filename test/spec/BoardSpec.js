describe("Board", function() {
  // Board.SIZE = 5
  describe("find", function() {
    describe("both arguments in board", function() {
      it("finds square", function() {
        var s = Board.find(1,1);
        expect(s.x).toEqual(1);
        expect(s.y).toEqual(1);
      })
    })

    describe("one of arguments = 0", function() {
      it("finds square", function() {
        var f = Board.find(1, 0);
        expect(f).toBe(Board.find(1, 5))
      })
    })

    describe("one of arguments = Board.size + 1", function() {
      it("finds square", function() {
        var f = Board.find(1, 6);
        expect(f).toBe(Board.find(1, 1))
      })
    })

  })

  describe("addFood", function() {
    it("adds food", function() {
      expect(document.querySelectorAll(".food").length).toEqual(0)
      Board.addFood()
      expect(document.querySelectorAll(".food").length).toEqual(1)
    })
  })
})
