describe("Board", function() {
  // Board.SIZE = 5
  describe("find", function() {
    it("finds element", function() {
      var s = Board.find(1,1);
      expect(s.x).toEqual(1);
      expect(s.y).toEqual(1);
    });

    it("finds element when coord = 0", function() {
      var f = Board.find(1, 0);
      expect(f).toBe(Board.find(1, 5))
    })

  })

  describe("add_food", function() {
    it("adds food", function() {
      expect(document.querySelectorAll(".food").length).toEqual(0);
      Board.addFood();
      expect(document.querySelectorAll(".food").length).toEqual(1);
    })
  })
});
