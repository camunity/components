import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log('inside use effect!')
    document.title = `You clicked ${count} times`

    return function cleanup() {
      console.log('inside use effect cleanup')
    }
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Example
