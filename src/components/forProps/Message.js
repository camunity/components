import React from 'react'

// Class based component declaration
class Message extends React.Component {
  // a lifecycle method that gets called first
  // when a Component class is initializing
  constructor(props) {
    super(props)
    console.log(props)
    // console.log("Hey I'm in the constructor!")
    // alert('ayeeeee we in the constructor!')
  }

  renderMessage = () => {
    // help us render the right message string!
    if (this.props.sender) {
      return `${this.props.content} sent by ${this.props.sender}`
    } else {
      return this.props.content
    }
  }

  // All class based components need to define a render method
  // The render method returns some JSX to be rendered
  render() {
    console.log(this.props.content)

    if (this.props.content) {
      return <div>{this.renderMessage()}</div>
    } else {
      return <div>This component has no prop for content!</div>
    }
  }
}

export default Message
