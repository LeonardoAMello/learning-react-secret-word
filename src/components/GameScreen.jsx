import './GameScreen.css'

const GameScreen = ({verifyLetter}) => {
  return (
    <div>
      <h1>Secret Word</h1>
      <button onClick={verifyLetter}>Finalizar o jogo</button>
    </div>
  )
}

export default GameScreen