// responsible for showing a message based on user's mood!

import React from 'react'

class Mood extends React.Component {
  constructor() {
    super()

    // initialize some state variables in our component
    this.state = { mood: 'unknown' }
  }

  onFeelingGoodPressed = () => {
    // this.setState changes the state of the Component
    this.setState({ mood: 'good' })
  }

  onFeelingEhPressed = () => {
    // this.setState changes the state of the Component

    this.setState({ mood: 'eh' })
  }

  renderMessage = () => {
    // check the state to determine what message to render

    if (this.state.mood == 'unknown') {
      // mood is unknown!
      return 'Hey! How are you feeling today?'
    } else {
      if (this.state.mood == 'good') {
        return "Glad to know you're feeling good!"
      } else {
        // this.state.mood == "eh"
        return 'Ah man hope you feel better soon!'
      }
    }
  }

  render() {
    console.log('inside render!')
    console.log(this.state.mood)
    return (
      <div>
        <h1>{this.renderMessage()}</h1>
        <div>
          <button onClick={this.onFeelingGoodPressed}>Feeling Good! 😁</button>
          <button onClick={this.onFeelingEhPressed}>Feeling Eh! 😕 </button>
        </div>
      </div>
    )
  }
}

export default Mood
