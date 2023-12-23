import Styles from "./Front.module.css";

export default function FrontPage(props) {
    return (
        <div className={Styles.container}>
            <div className={Styles.frontImage}>
                <img src="/images/dices.png" alt="" />
            </div>
            <div className={Styles.playGame}>
                <h1>DICE GAME</h1>
                <button onClick={props.toggle}>PLAY NOW</button>
            </div>
        </div>
    );
}
