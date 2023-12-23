import Styles from "./Navigation.module.css";
export default function NavBar() {
    return (
        <header className={`${Styles.navigation} container`}>
            <img src="/images/logo.png" alt="" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    );
}