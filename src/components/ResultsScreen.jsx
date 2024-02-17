import './ResultsScreen.css'

const ResultsScreen = ({returnStart}) => {
  return (
    <div>
      <h1>Secret Word</h1>
      <button onClick={returnStart}>Voltar para o início</button>
    </div>
  )
}

export default ResultsScreen