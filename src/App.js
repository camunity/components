import './App.css'
// import Hello from './components/forProps/Hello'
// import Message from './components/forProps/Message'
import Mood from './components/Mood'

// Step 1: Define a Component
function App() {
  // Step 2: Return some JSX
  return (
    <div className="App">
      <Mood />
    </div>
  )
}

//Step 3: Exporting/Importing Component
export default App
