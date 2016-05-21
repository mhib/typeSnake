describe("BoardGenerator", function() {
  describe("generateSquare", function() {
    it("generates sqaure", function() {
      var s = BoardGenerator.generateSquare(4, 5)
      expect(+s.getAttribute("data-x")).toEqual(4);
      expect(+s.getAttribute("data-y")).toEqual(5);
      expect(s.classList).toContain("square");
      expect(s.classList).toContain("square-4-5");
    })
  })
})
