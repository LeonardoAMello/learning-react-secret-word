import './ResultsScreen.css'

const ResultsScreen = ({returnStart, score}) => {
  return (
    <div>
      <h1>Secret Word</h1>
      <h1>Fim de jogo!</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={returnStart}>Voltar para o início</button>
    </div>
  )
}

export default ResultsScreen