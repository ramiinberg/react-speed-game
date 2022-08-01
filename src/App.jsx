import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

  const handleTextChange = event => {
    setText(event.target.value)
  }

  return (
    <div className='App'>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleTextChange} />
      <h4>Time reminaing: ???</h4>
      <button type='button'>Start</button>
      <h1>Word count: ???</h1>
    </div>
  )
}

export default App
