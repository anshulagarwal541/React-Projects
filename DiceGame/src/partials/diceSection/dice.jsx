import Styles from "./Dice.module.css";
import { useState } from "react";
import Button from "../button/button.jsx";
import RuleDiv from "../rules/ruleDiv.jsx";



export default function DiceDiv(props) {
    const [rules, updateRule] = useState(false);
    function showRules() {
        updateRule(p=>!p);
    }
    return (
        <div>
            <div className={Styles.container}>
                <img onClick={props.manageDice} src={`/images/dice/dice_${props.rand}.png`} alt="" />
                <p>Click on the dice to ROLL !!</p>
                <Button onClick={props.resetTotalPoints} isBlack={false} Text="Reset Score" />
                <Button onClick={showRules} isBlack={true} Text={rules ? "Hide Rules" : "Show Rules"} />
            </div>
            {rules && <RuleDiv/>}
        </div>
    )
}