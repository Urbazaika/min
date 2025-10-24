import type React from "react"
import styles from './SearchInput.module.css'

interface SearchInputProps {
    value: string
    onChange: (v: string) => void
    placeholder?: string
}

export const SearchInput: React.FC<SearchInputProps> = ({
    value,
    onChange,
    placeholder = 'search...'
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <div className={styles.container}>
            <input 
                type="text" 
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    )
} 