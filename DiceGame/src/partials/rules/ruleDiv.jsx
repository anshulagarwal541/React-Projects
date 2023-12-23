import Styles from "./Rules.module.css";

export default function RuleDiv() {
    return (
        <div className={Styles.container}>
            <h1>How to play dice game</h1>
            <ul>
                <li>Select any number</li>
                <li>Click on dice image</li>
                <li>after click on dice if selected number is equal to dice number you will get same point as dice</li>
                <li>If you get wrong wrong guess then 2 point will be deducted</li>
            </ul>
        </div>
    );
}