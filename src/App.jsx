// Components
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import ResultsScreen from './components/ResultsScreen'

// React

import { useEffect, useState } from 'react'

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

  const [score, setScore] = useState(0);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [retries, setRetries] = useState(5);
  
  const startGame = () => {
    chooseWord();
    setGameStage(stages[1].name);
  }

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toUpperCase();

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actual) => [...actual, normalizedLetter]);
    }
    else {
      setWrongLetters((actual) => [...actual, normalizedLetter]);
      setRetries((actual) => actual - 1);
    }
  }

  useEffect(() => {
    const uniqueLetters = letters.filter((item, i, ar) => ar.indexOf(item) === i);
    
    if(guessedLetters.length > 0 && guessedLetters.length == uniqueLetters.length) {
      setScore((actual) => actual + 100);
      chooseWord();
    }

    if(retries == 0) {
      finishGame();
    }
  }, [guessedLetters, retries])
  

  const chooseWord = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)]

    const currentWords = words[category]
    const word = currentWords[Math.floor(Math.random() * currentWords.length)]

    const wordLetters = word.split("").map((l) => l.toUpperCase());

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  const finishGame = () => {
    // Reseting all game session data
    setPickedWord("");
    setPickedCategory("");
    setLetters([]);
    setGuessedLetters([]);
    setWrongLetters([]);
    setRetries(5);

    // Results screen
    setGameStage(stages[2].name);
  };

  const returnStart = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className='App'> 
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <GameScreen verifyLetter={verifyLetter} pickedCategory={pickedCategory} pickedWord={pickedWord} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} retries={retries} score={score}/>}
      {gameStage === 'results' && <ResultsScreen returnStart={returnStart} score={score}/>}
    </div>
  )
}

export default App
