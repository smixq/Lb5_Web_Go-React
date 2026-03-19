import { useCart } from "../../Providers/CartProvider";
import { BuyButton } from "../BuyButton/BuyButton";
import { CartList } from "../CartList/CartList";
import styles from "./Cart.module.scss";

export function Cart() {
    const { cart, cartOpen, setCartOpen, calculateTotalPrice } = useCart();

    return (
        <div
            className={`${styles.overlay} ${cartOpen ? styles.active : ""}`}
            onClick={() => setCartOpen(false)}>
            <div
                className={styles.cart}
                onClick={(e) => e.stopPropagation()} >
                <h2 className={styles.title}>🛒 Корзина</h2>
                <div className={styles.cartContent}>

                    {cart.length === 0 ? (
                        <div className={styles.emptyMessage}>Корзина пуста</div>
                    ) : (
                        <CartList cartAdded={cart} />
                    )}
                </div>

                {cart.length === 0 ? (
                    <div className={styles.emptyMessage}></div>
                ) : (
                    <div className={styles.footer}>
                        <p>Итого: {calculateTotalPrice()} ₽</p>
                        <BuyButton></BuyButton>

                    </div>
                )}

            </div>

        </div>
    );
}