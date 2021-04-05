class Pixel {
  x: number
  y: number
  constructor(x, y) {
    this.x = x || 0
    this.y = y || 0
  }

  equals (other) {
    return other && other.x === this.x && other.y === this.y
  }
}

export default Pixel
