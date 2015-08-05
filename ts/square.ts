class Square {
  x: number
  y: number
  div: Element
  snake: boolean
  food: boolean
  constructor(x, y, div = null) {
    this.x = x
    this.y = y
    this.div = div
    this.snake = false
    this.food = false
  }

  coords() {
    return { x: this.x, y: this.y }
  }

  bone() {
    this.div.classList.add("bone")
    this.snake = true
  }

  unbone() {
    this.div.classList.remove("bone")
    this.snake = false
  }

  makeFood() {
    this.div.classList.add("food")
    this.food = true
  }

  unfood() {
    this.div.classList.remove("food")
    this.food = false
  }

  head() {
    this.div.classList.add("head")
  }

  unhead() {
    this.div.classList.remove("head")
  }
}
