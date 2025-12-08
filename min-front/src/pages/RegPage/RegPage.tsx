import type React from "react";
import { Input } from "../../components/core/Input/Input";
import styles from "./RegPage.module.css"
import { useNavigate } from "react-router-dom";

export const RegPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.menu}>
            <h2 className={styles.title}>!!!reg!!!</h2>
            <form className={styles.inputs}>
                <Input placeholder="login" />
                <Input placeholder="password" />
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => {navigate('/auth')}}>auth</button>
                    <button className={styles.button} onClick={() => {navigate('/')}}>reg</button>
                </div>
            </form>
        </div>
    )
}