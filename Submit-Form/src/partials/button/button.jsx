import Styles from "./Button.module.css";

export default function Button(props){
    return (
        <button className={props.isTransparent ? Styles.transBtn : Styles.btn}>{props.icon} {props.btnText}</button>
    );
}