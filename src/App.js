import './App.css'
import Hello from './components/Hello'
import Message from './components/Message'

// Step 1: Define a Component
function App() {
  // Step 2: Return some JSX
  return (
    <div className="App">
      <header className="App-header">
        <Hello date={'9/29/21'} />
        <Message content={'Yo yo yo!'} sender={'Cam'} />
        <Message content={'This is cool!'} sender={'Naomi'} />
        <Message content={'Aye aye aye!'} sender={'Khray'} />
        <Message content={'This component has no sender prop!'} />
        <Message />
      </header>
    </div>
  )
}

//Step 3: Exporting/Importing Component
export default App
