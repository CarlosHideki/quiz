import React from 'react'
import { Container } from './styles'
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import Welldone from '../../img/welldone.svg'


const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <Container>
        <h2>Fim de Jogo!!!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>
            Você acertou {quizState.score} de{" "} 
            {quizState.questions.length}{" "}
            perguntas
        </p>
        <img src={Welldone} alt="Fim de Jogo"/>
        <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </Container>
  )
}

export default GameOver