import './App.css'
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'
import Welcome from './components/welcome'
import Questions from './components/questions'
import GameOver from './components/gameover'




function App() {

  const [quizState, dispatch] = useContext(QuizContext);

  //useEffect para embarallhar as perguntas
  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS" });
  }, [])

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Questions/>}
      {quizState.gameStage === "End" && <GameOver/>}
      <p className='feitopor'> Powered By Carlos Hideki Morita</p>
    </div>
  )
}

export default App
