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
    let playerAnswer = this.getGuess();
    while (playerAnswer !== this.secretNum) {
      this.prevGuesses.push(playerAnswer);
      this.render(playerAnswer);
      playerAnswer = this.getGuess()
    }
    let numGuesses = this.prevGuesses.length;
    alert(`Congrats! You guessed the number in ${numGuesses} tries.`)
  },
  render: function(guess) {
    if (isNaN(guess)) {
      alert(`That's not a number!`);
    } else if (guess < 1 || guess > 100) {
      alert(`That number is not within range.`);
    } else if (guess < this.secretNum) {
      alert(`Your guess was too low. Previous guesses were: ${this.prevGuesses.join(', ')}.`);
    } else if (guess > this.secretNum) {
      alert(`Your guess was too high. Previous guesses were: ${this.prevGuesses.join(', ')}.`);
    }
  }
}

game.play()