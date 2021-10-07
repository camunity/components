import TaskForm from './TaskForm'
import TaskList from './TaskList'
import React from 'react'

class TaskContainer extends React.Component {
  constructor() {
    super()
    // create a state variable to hold our tasks!
    this.state = { tasks: [] }
  }

  /* This is a callback function we're defining here and passing as a prop to our child component! More on that here: https://reactjs.org/docs/lifting-state-up.html */
  handleNewTask = (task) => {
    // task is data coming back from TaskForm!
    console.log('Child returned...', task)

    //set a variable to get old state
    let oldData = this.state.tasks
    console.log(oldData, [...oldData, task])

    // update state with new tasks
    this.setState({ tasks: [...oldData, task] })
    /* NOTE  
    ... is the destructuring operator you can use with arrays and objects in Javascript 
    */
  }

  render() {
    // taskForm receives a function as a prop that we'll use as a callback!

    // taskList receives our state as props to show in the list
    return (
      <div>
        <TaskForm onNewTask={this.handleNewTask} />
        <TaskList data={this.state.tasks} />
      </div>
    )
  }
}

export default TaskContainer
