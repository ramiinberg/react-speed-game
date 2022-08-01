import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [timer, setTimer] = useState(5)
  const [runCount, setRunCount] = useState(false)

  const handleTextChange = event => {
    setText(event.target.value)
  }

  const calculateWords = newText => {
    const splitText = newText.trim().split(' ')
    const filteredWords = splitText.filter(word => word !== '')
    return filteredWords.length
  }

  useEffect(() => {
    if (runCount) {
      if (timer > 0) {
        setTimeout(() => {
          setTimer(prevState => prevState - 1)
        }, 1000)
      } else {
        setRunCount(false)
      }
    }
  }, [timer, runCount])

  return (
    <div className='App'>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleTextChange} />
      <h4>Time remaining: {timer}</h4>
      <button type='button' onClick={() => setRunCount(true)}>
        Start
      </button>
      <h1>Word count: ???</h1>
    </div>
  )
}

export default App
