import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
      <div>
          <h1>Fimd de jogo</h1>
          <h2>A sua pontuaç~çao foi: <span>{score}</span></h2>
          <button onClick={retry}>resetar jogo</button>
      </div>
    
  )
}

export default GameOver