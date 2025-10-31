import type React from "react"
import styles from './AvatarImage.module.css'

interface AvatarImageProps {
    src?: string
    size?: 'small' | 'medium' | 'large'
}

export const AvatarImage: React.FC<AvatarImageProps> = ({
    src, size = 'small'
}) => {
    return (
        <img src={src} className={`${styles.avatar_image} ${styles[size]}`} />
    )
}