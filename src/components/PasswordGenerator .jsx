import { useState } from "react";
import style from "../styles/PasswordGenerator.module.css"

export default function PasswordGenerator() {
    const [password, setPassword] = useState("");

    const generatePassword = (length) => {
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        const allChars = upperCase + lowerCase + numbers + specialChars;

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            generatedPassword += allChars[randomIndex];
        }
        return generatedPassword;
    }

    const handleGeneratedPassword = () => {
        const newPassword = generatePassword(12)
        setPassword(newPassword);
    }

    return (
        <div className={style.div}>
            <h1 className={style.text}>Gerador de Senha</h1>
            <div className={style.button_div}>
                <button className={style.button} onClick={handleGeneratedPassword}>Gerar Senha</button>
            </div>
            <div className={style.password_div}>
                {password && (
                    <h3 className={style.password}>{password}</h3>
                )}
            </div>

        </div>
    )
}