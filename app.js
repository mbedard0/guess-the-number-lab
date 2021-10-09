const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess: function () {
    let answer = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`, `Type your guess here.`);
    answer = parseInt(answer);
    return answer
  },
  play: function () {
    this.secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
  },
}