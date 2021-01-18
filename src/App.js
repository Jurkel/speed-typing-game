import React, {useState, useEffect} from 'react'

function App() {
  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(5)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(' ')
    const filteredWords = wordsArr.filter(word => word !== '')
    return filteredWords.length
  }

  useEffect(() => {
    if(timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }
    
  }, [timeRemaining])

  return (
    <div>
      <h1>How fast do you type? , Yeah how fast?</h1>
      <textarea 
        onChange={handleChange}
        value={text}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => calculateWordCount(text)}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
