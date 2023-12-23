import FrontPage from "./partials/Front/frontPage.jsx"
import "./App.css";
import { useState } from "react";
import PlayGame from "./partials//playGame/playGame.jsx";
export default function App() {
  const [isGameOn, openGame] = useState(false);
  function manageGame() {
    openGame(!isGameOn);
  }
  return (
    <>
      {
        isGameOn ? <PlayGame /> : <FrontPage toggle={manageGame} />
      }
    </>
  )
}