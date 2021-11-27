class Chronometer {
  
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if(callback !== undefined) callback();
      this.currentTime ++
    }, 1000);
  return this.intervalId
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    // let seconds = this.currentTime - 60 * this.getMinutes()
    let seconds = this.currentTime % 60 
    return seconds
  }

  computeTwoDigitNumber(value) {
    let valueString = `${value}`
    if(valueString.length < 2) return `0${valueString}`
    else return `${value}`
    /* if(valueString.length > 2) return `${valueString[0]}${valueString[1]}` */
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
    this.intervalId = null
    // ... your code goes here
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    /* let minutes = this.getMinutes()
    let seconds = this.getSeconds()
    let minutesFormat = this.computeTwoDigitNumber(minutes)
    let secondsFormat = this.computeTwoDigitNumber(seconds)
    return `${minutesFormat}:${secondsFormat}` */
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
