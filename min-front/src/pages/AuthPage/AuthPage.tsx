import type React from "react";
import { Input } from "../../components/core/Input/Input";
import styles from "./AuthPage.module.css"
import { useNavigate } from "react-router-dom";

export const AuthPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.menu}>
            <h2 className={styles.title}>!!!auth!!!</h2>
            <form className={styles.inputs}>
                <Input placeholder="login" />
                <Input placeholder="password" />
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => {navigate('/reg')}}>reg</button>
                    <button className={styles.button} onClick={() => {navigate('/')}}>auth</button>
                </div>
            </form>
        </div>
    )
}