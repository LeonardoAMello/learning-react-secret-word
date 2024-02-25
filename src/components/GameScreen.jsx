import { useRef, useState } from 'react';
import './GameScreen.css'

const GameScreen = ({verifyLetter, pickedCategory, pickedWord, letters, guessedLetters, wrongLetters, retries, score}) => {

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");
    letterInputRef.current.focus();
  }

  return (
    <div className='gameScreen'>
      <h1>Secret Word</h1>
      <p className='points'>Pontuação: {score}</p>
      <h1>Advinhe a palavra:</h1>
      <h3 className='tip'>Dica: <span>{pickedCategory}</span></h3>
      <p>Você ainda tem {retries} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? ( 
            <span key={i} className='letterContainerFilled'>{letter}</span>
          ) : (
            <span key={i} className='letterContainerEmpty'></span>
          )
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra: </p>
        <form onSubmit={handleSubmit}>
          <input type="text" name='letter' maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <span>Letras já utilizadas:</span>
        <p>{wrongLetters.join(", ")}</p>
      </div>
    </div>
  )
}

export default GameScreen