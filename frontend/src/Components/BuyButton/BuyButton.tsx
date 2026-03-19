import { useCart } from "../../Providers/CartProvider";
import styles from "./BuyButton.module.scss"
export function BuyButton() {
    const { byBtn } = useCart()
    return (
        <button className={styles.buyButton} onClick={byBtn}>
            Купить
        </button>
    );
}