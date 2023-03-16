import React from 'react'
import { Container } from './styles'
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

//$wrong={quizState.answerSelected && option !== answer ? "wrong" : ""}

const Option = ({ option, selectOption, answer }) => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <Container $mode={quizState.answerSelected && 
        option === answer ? "correct" : ""}
     onClick={() => selectOption()}>
        <p>{option}</p>
    </Container>
  )
}

export default Option