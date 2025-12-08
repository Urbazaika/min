import type React from "react";
import styles from "./Input.module.css"

interface InputProps {
placeholder: string
}

export const Input: React.FC<InputProps> = ({
    placeholder
}) => {
    return (
        <input 
            className={styles.input} 
            type="text" 
            placeholder={placeholder}
        />
    )
}