import Button from "../button/button.jsx";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Styles from "./Form.module.css";
import { useState } from "react";

export default function FormSection() {
    const [name, nameFunc] = useState("Rachit");
    const [email, emailFunc] = useState("hello@gmail.com");
    const [text, textFunc] = useState("Hello");
    function manageForm(e) {
        e.preventDefault();
        nameFunc(e.target[0].value);
        emailFunc(e.target[1].value);
        textFunc(e.target[2].value);
        console.log({name, email, text});
    }
    return (
        <div className={`${Styles.formContainer}`}>
            <div className={Styles.formContents}>
                <div className={Styles.contactBtns}>
                    <Button btnText="VIA SUPPORT CHART" icon={<MdMessage fontSize="24px" />} />
                    <Button btnText="VIA CALL" icon={<IoCall fontSize="24px" />} />
                </div>
                <Button isTransparent={true} btnText="VIA EMAIL FORM" icon={<MdEmail fontSize="24px" />} />
                <form onSubmit={manageForm} className={Styles.form}>
                    <div className={Styles.formControl}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className={Styles.formControl}>
                        <label htmlFor="email">E-Mail</label>
                        <input name="email" type="email" id="email" />
                    </div>
                    <div className={Styles.formControl}>
                        <label htmlFor="text">TEXT</label>
                        <textarea name="text" id="text" rows="8"></textarea>
                    </div>
                    <Button btnText="Submit" />
                </form>
                <div>
                    {name+"  "+email+"  "+text}
                </div>
            </div>
            <div className="formImage">
                <img src="/images/contact.svg" alt="" />
            </div>
        </div>
    );
}