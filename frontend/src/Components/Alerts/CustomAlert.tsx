// Components/CustomAlert/CustomAlert.tsx
import { useEffect } from 'react';
import { useCart } from '../../Providers/CartProvider';
import styles from './CustomAlert.module.scss';

interface CustomAlertProps {
    message: string;
    type: 'success' | 'error' | 'info';
    onClose: () => void;
}

export function CustomAlert({ message, type, onClose }: CustomAlertProps) {
    const { cartOpen } = useCart();

    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    // Определяем класс в зависимости от того, открыта корзина или нет
    const alertPositionClass = cartOpen ? styles.left : styles.right;

    return (
        <div className={`${styles.alert} ${styles[type]} ${alertPositionClass}`}>
            <span>{message}</span>
            <button onClick={onClose} className={styles.closeBtn}>×</button>
        </div>
    );
}