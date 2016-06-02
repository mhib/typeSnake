class Square {
  x: number
  y: number
  div: Element
  is_snake: boolean
  food: boolean

  constructor(x, y, div = null) {
    this.x = x
    this.y = y
    this.div = div
    this.is_snake = false
    this.food = false
  }

  coords() : Object {
    return { x: this.x, y: this.y }
  }

  bone() : void {
    this.div.classList.add("bone")
    this.is_snake = true
  }

  unbone() : void {
    this.div.classList.remove("bone")
    this.is_snake = false
  }

  makeFood() : void {
    this.div.classList.add("food")
    this.food = true
  }

  unfood() : void {
    this.div.classList.remove("food")
    this.food = false
  }

  head() : void {
    this.div.classList.add("head")
  }

  unhead() :void {
    this.div.classList.remove("head")
  }
}
