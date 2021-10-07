import React from 'react'

class TaskForm extends React.Component {
  constructor() {
    super()
    // setting state to hold form input data as it changes
    this.state = { inputData: '' }
  }

  /* Event handler for Form Input */
  handleInputChange = (event) => {
    // prevent page reloads form event
    event.preventDefault()
    console.log(event.target.value)

    // update the state everytime the form changes
    this.setState({ inputData: event.target.value })
  }

  /* Event handler for Submit Button */
  handleSubmit = (event) => {
    // stopping the page reload
    event.preventDefault()
    console.log('This is handle submit', this.state.inputData)

    // call the callback function from FormContainer and send data from state!
    this.props.onNewTask(this.state.inputData)
  }

  render() {
    // onChange is an event function for form inputs
    /* Note: more on form inputs - https://reactjs.org/docs/forms.html */

    return (
      <form>
        <input
          type="text"
          value={this.state.inputData}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmit}>Submit!</button>
      </form>
    )
  }
}

export default TaskForm
