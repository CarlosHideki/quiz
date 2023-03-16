import React from 'react'
import { Container } from './styles'
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import Option from '../option'

const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[
        quizState.currentQuestion
    ];

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, option},
        });
    }

  return (
    <Container>
        <p>
            Pergunta {quizState.currentQuestion + 1 } de {quizState.questions.length}
        </p>
        <h2>{currentQuestion.question}</h2>
        <div>
            {currentQuestion.options.map((option) =>(
                <Option
                option={option} 
                key={option} 
                answer={currentQuestion.answer}
                selectOption={() => onSelectOption(option)}
                />
            ))}
        </div>
        {quizState.answerSelected && (
            <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
            Continuar
        </button>
        )}
    </Container>
  )
}

export default Questions