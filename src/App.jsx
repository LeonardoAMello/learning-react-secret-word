// Components
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import ResultsScreen from './components/ResultsScreen'

// React

import { useCallback, useEffect, useState } from 'react'

// Data

import { wordsList } from './data/words'

// CSS
import './App.css'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "results"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  
  const startGame = () => {
    setGameStage(stages[1].name);
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  const returnStart = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className='App'> 
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <GameScreen verifyLetter={verifyLetter}/>}
      {gameStage === 'results' && <ResultsScreen returnStart={returnStart}/>}
    </div>
  )
}

export default App
