const numbers = [1, 2, 3, 4, 5, 6];
import Styles from "./Play.module.css";
import { useState } from "react";
import DiceDiv from "../diceSection/dice.jsx";


export default function PlayGame() {
    const [stateNumber, updateState] = useState("0");
    const [rand, updateRand] = useState(1);
    const [error, showError] = useState(undefined);
    const [isGameOn, setGame] = useState(false);
    const [totalPoints, updatePoints] = useState(0)
    function setTotalPoints(){
        if(parseInt(stateNumber)===rand)
        {
            updatePoints(p=>p+rand);
        }
        else{
            updatePoints(p=>p-2);
        }
    }
    function manageDice() {
        if (stateNumber === "0") {
            showError(true);
            return;
        }
        updateRand(Math.floor(Math.random() * 6) + 1);
        setGame(true);
        updateState("0");
        setTotalPoints();
    }
    function manageBox(e) {
        updateState(e.target.innerHTML);
        showError(false);
    }
    function incrementPoints() {
        updatePoints(p => p + rand);
    }
    function decrementPoints() {
        updatePoints(p => p - 2);
    }
    function resetTotalPoints(){
        updatePoints(0);
    }
    return (
        <div className={Styles.container}>
            <div className={Styles.PlayHeader}>
                <div className={Styles.totalPoints}>
                    <h1>{totalPoints}</h1>
                    <p>Total Score</p>
                </div>
                <div className={Styles.selectNumbers}>
                    {error ? <p style={{ color: "red" }}>Please select a Number !!</p> : null}
                    <div className={Styles.boxes}>
                        {numbers.map((n, idx) => {
                            return <div style={stateNumber == n ? { backgroundColor: "black", color: "white" } : { backgroundColor: "transparent", color: "black" }} key={idx + 1} onClick={manageBox} > {n}</div>
                        })}
                    </div>
                    <p>Select Number</p>
                </div>
            </div >
            <DiceDiv manageDice={manageDice} resetTotalPoints={resetTotalPoints} rand={rand} />
        </div>
    );
}