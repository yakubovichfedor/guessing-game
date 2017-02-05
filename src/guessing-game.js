class GuessingGame {
  constructor() {
    this.arr = null
    this.min = null
    this.max = null
    this.m = null
  }

  setRange(min, max) {
    let arr = []

    for (let i = 0, j = min; j <= max; i++, j++) {
      arr[i] = j
    }

    this.arr = arr
    this.max = arr.length - 1
    this.min = 0
  }

    guess() {

    }

    lower() {

    }

    greater() {

    }
}

module.exports = GuessingGame;
