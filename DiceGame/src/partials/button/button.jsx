import Styles from "./Button.module.css";

export default function Button(props){
    return (
        <button onClick={props.onClick} className={Styles.btn} style={
            props.isBlack?{backgroundColor:"black", color:"white"}
            :
            {backgroundColor:"Transparent", color:"Black"}
        }>{props.Text}</button>
    )
}