import { createContext, useReducer } from 'react';
import questions from '../data/questions'

// 0 = Start , 1 = Playing , 2 = End
const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    currentQuestion: 0,
    questions,
    score: 0,
    answerSeleted: false,
}

const quizReducer = (state, action) => {

    switch(action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };
        
        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() =>{
                return Math.random() - 0.5;
            });

            return {
                ...state,
                questions: reorderedQuestions,
            };
            
        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1
            let endGame = false

            //verifica se não existe o proximo indice
            if(!questions[nextQuestion]) {
                endGame = true;
            };

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false, 
            };

        case "NEW_GAME":
            return initialState;

        case "CHECK_ANSWER":
            //condição para não contabilizar
            //mais de uma vez a resposta correta
            if(state.answerSelected) return state;

            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0

            if (answer === option) correctAnswer = 1;

            return{
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            }

        default:
            return state;
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>
        {children}
    </QuizContext.Provider>
};