import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const STARTING_TIME = 5

  const [text, setText] = useState('')
  const [timer, setTimer] = useState(STARTING_TIME)
  const [runCount, setRunCount] = useState(false)
  const [words, setWords] = useState(0)

  const handleTextChange = event => {
    setText(event.target.value)
  }

  const startGame = () => {
    setTimer(STARTING_TIME)
    setRunCount(true)
    setText('')
  }

  const calculateWords = newText => {
    const splitText = newText.trim().split(' ')
    const filteredWords = splitText.filter(word => word !== '')
    return filteredWords.length
  }

  const endGame = () => {
    setRunCount(false)
    setWords(calculateWords(text))
  }

  useEffect(() => {
    if (runCount) {
      if (timer > 0) {
        setTimeout(() => {
          setTimer(prevState => prevState - 1)
        }, 1000)
      } else {
        endGame()
      }
    }
  }, [timer, runCount])

  return (
    <div className='App'>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleTextChange} disabled={!runCount} />
      <h4>Time remaining: {timer}</h4>
      <button type='button' onClick={startGame} disabled={runCount}>
        Start
      </button>
      <h1>Word count: {words}</h1>
    </div>
  )
}

export default App
