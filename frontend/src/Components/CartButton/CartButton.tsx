// Components/CartButton/CartButton.tsx
import { useCart } from "../../Providers/CartProvider";
import styles from "./CartButton.module.scss";

interface CartButtonProps {
    cartOpen: boolean;
    setOpenCart: (open: boolean) => void;
}

export function CartButton({ cartOpen, setOpenCart }: CartButtonProps) {
    const { cart } = useCart();

    return (
        <button
            className={styles.cartButton}
            onClick={() => setOpenCart(!cartOpen)}
        >
            🛒 <span className={styles.count}>{cart.length}</span>
        </button>
    );
}