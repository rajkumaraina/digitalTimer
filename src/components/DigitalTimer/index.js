import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {isStarted: false, timerMin: 25, timerSec: 0, initialMin: 25}

  StartButton = () => {
    const {isStarted, timerMin, timerSec} = this.state
    this.setState({isStarted: !isStarted})
    this.timerId = setInterval(this.tick, 1000)
  }

  pauseButton = () => {
    const {timerMin, timerSec, isStarted} = this.state
    clearInterval(this.timerId)
    const min = timerMin
    const sec = timerSec
    this.setState({timerMin: min, timerSec: sec, isStarted: !isStarted})
  }

  tick = () => {
    const {timerSec} = this.state
    if (timerSec === 0) {
      this.setState(prevState => ({
        timerSec: 60,
        timerMin: prevState.timerMin - 1,
      }))
    }
    this.setState(prevState => ({
      timerMin: prevState.timerMin,
      timerSec: prevState.timerSec - 1,
    }))
  }

  ResetButton = () => {
    const {isStarted, initialMin} = this.state
    const resetMin = initialMin
    console.log(initialMin)
    this.setState({
      timeMin: 25,
      timerSec: 0,
      isStarted: !isStarted,
      initialMin: resetMin,
    })
    clearInterval(this.timerId)
  }

  valueDecrease = () => {
    this.setState(prevState => ({
      timerMin: prevState.timerMin - 1,
      initialMin: prevState.initialMin - 1,
    }))
  }

  valueIncrease = () => {
    this.setState(prevState => ({
      timerMin: prevState.timerMin + 1,
      initialMin: prevState.initialMin + 1,
    }))
  }

  render() {
    const {isStarted, timerMin, timerSec, initialMin} = this.state
    let secLessthan9 = false
    if (timerSec <= 9) {
      secLessthan9 = true
    }
    let imageElement
    if (isStarted === true) {
      imageElement = (
        <button className="button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
            alt="pause icon"
            className="icons"
          />
        </button>
      )
    } else {
      imageElement = (
        <button className="button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
            alt="play icon"
            className="icons"
          />
        </button>
      )
    }
    return (
      <div className="bgContainer">
        <h1 className="DigitalHeading">Digital Timer</h1>
        <div className="MainContainer">
          <div className="timerContainer">
            <div className="timerInMiddleContainer">
              <h1 className="heading">
                {initialMin}:{secLessthan9 ? `0${timerSec}` : timerSec}
              </h1>
              <p className="para">{isStarted ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="secondContainer">
            <div className="iconsContainer">
              <div className="eachIcon">
                {imageElement}
                <button
                  className="button"
                  type="button"
                  onClick={this.pauseButton}
                >
                  {isStarted ? 'Pause' : 'Start'}
                </button>
              </div>
              <div className="eachIcon">
                <button type="button" className="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="icons"
                  />
                </button>
                <button
                  className="iconDescription button"
                  onClick={this.ResetButton}
                >
                  Reset
                </button>
              </div>
            </div>
            <p className="smallpara">Set Timer Limit</p>
            <div className="plus_minusContainer">
              <button
                type="button"
                className="button plus_MinusIcon"
                onClick={this.valueDecrease}
              >
                -
              </button>
              <div className="timeCount">
                <p className="timeValue">{initialMin}</p>
              </div>
              <button
                type="button"
                className="button plus_MinusIcon "
                onClick={this.valueIncrease}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
