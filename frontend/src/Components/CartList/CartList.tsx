// Components/CartList/CartList.tsx
import type { Product } from "../../Models/Product";
import { useCart } from "../../Providers/CartProvider";
import styles from "./CartList.module.scss"

interface CartListProps {
    cartAdded: Product[]
}

export function CartList({ cartAdded }: CartListProps) {
    const { removeFromCart, cleanCart } = useCart(); // Получаем функции удаления и очистки

    return (
        <div className={styles.cartListContainer}>
            {cartAdded.map((product) => (
                <div key={product.id} className={styles.cartItem}>
                    <span>{product.name}</span>
                    <span>{product.price} ₽</span>
                    <button
                        onClick={() => removeFromCart(product.id)}
                        className={styles.removeBtn}
                    >
                        🗑️
                    </button>
                </div>
            ))}
            <button className={styles.clearCartBtn} onClick={() => cleanCart()}>
                Очистить корзину
            </button>
        </div>
    );
}