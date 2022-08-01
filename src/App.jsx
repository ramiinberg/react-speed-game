import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [timer, setTimer] = useState(10)

  const handleTextChange = event => {
    setText(event.target.value)
  }

  const calculateWords = newText => {
    const splitText = newText.trim().split(' ')
    const filteredWords = splitText.filter(word => word !== '')
    return filteredWords.length
  }

  return (
    <div className='App'>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleTextChange} />
      <h4>Time remaining: {timer}</h4>
      <button type='button' onClick={() => calculateWords(text)}>
        Start
      </button>
      <h1>Word count: ???</h1>
    </div>
  )
}

export default App
