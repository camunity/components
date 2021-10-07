function TaskList(props) {
  console.log('This is coming from Props', props.data)

  /*
    Mapping through data in arrays is a common way to create a list of JSX elements. More on that here: https://reactjs.org/docs/lists-and-keys.html
  */
  const list = props.data.map((task, index) => {
    return <li key={index}>{task}</li>
  })
  return (
    <div>
      <ul>{list}</ul>
    </div>
  )
}

export default TaskList
