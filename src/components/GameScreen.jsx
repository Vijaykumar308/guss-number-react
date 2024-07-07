import { useContext, useEffect, useState } from "react";
import GameChat from "./GameChat";
import {AppContext} from "../context/createContext";
import Modal from "./Modal";


function GameScreen({setShowPlayScreen}) {
  const [generatedNumber, setGeneratedNumber] = useState(1);
  const [guessCounter, setGuessCounter] = useState(0);
  const [win, setWin] = useState(false);
  const [show, setShow] = useContext(AppContext);


  console.log("generated number",generatedNumber);
  function handlerQuitGame() {
    setShow(true);
  }

  useEffect(() => {
    setGeneratedNumber(Math.floor(Math.random() * 100) + 1)
  },[])

  return (
    <div className="full-screen">
      <div className="game-screen full-screen flex align-item-center">
        <div className="left-side">  
          <div className="score-box">
            <h2 className="score" style={{textAlign:"center"}}> {guessCounter} <p style={{fontSize:"13px"}}>No of Guesses</p> </h2>
            <button className="game-quit-btn" onClick={handlerQuitGame}>Quit Game</button>
          </div>
        </div>

        {
          show && <Modal 
                    closeModal={setShow} 
                    message={`Your number was ${generatedNumber}`}
                    setShowPlayScreen={setShowPlayScreen}
                  /> 
        }

        {
          win && <Modal 
          closeModal={setShow} 
          message={`Well done! You emerged victorious. You make ${guessCounter} guesses.`}
          setShowPlayScreen={setShowPlayScreen}
        /> 
        }


        <div className="right-side">
          <GameChat setGuessCounter={setGuessCounter} generatedNumber={generatedNumber} setWin={setWin}/>
        </div>
      </div>
    </div>
  )
}

export default GameScreen;