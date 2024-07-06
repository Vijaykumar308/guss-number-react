import { useState } from "react";

import PlayScreen from "./components/PlayScreen";
import GameScreen from "./components/GameScreen";

import './App.css'

function App() {
  const [showPlayScreen, setShowPlayScreen] = useState(true);

  function playGame() {
    setShowPlayScreen(false);
  }

 return <>
    { showPlayScreen ? <PlayScreen handleGamePlay={playGame}/> : <GameScreen  setShowPlayScreen={setShowPlayScreen}/> }   
 </>
}

export default App
