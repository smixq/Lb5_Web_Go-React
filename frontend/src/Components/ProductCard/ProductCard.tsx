import type { Product } from "../../Models/Product";
import styles from "./ProductCard.module.scss"
import { useCart } from "../../Providers/CartProvider";

interface ProductCardProps {
    product: Product
}


const getTypeIcon = (type: string) => {
    const icons: Record<string, string> = {
        electric: '🎸',
        acoustic: '🪕',
        bass: '🎸',
        amp: '🔊',
        pedal: '👣',
        accessory: '🎛️'
    };
    return icons[type] || '🎵';
};
export function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src={`http://localhost:8080${product.imageUrl}`}
                    alt={product.name}
                    className={styles.image}
                    loading="lazy"
                />
                <span className={styles.typeBadge}>
                    {getTypeIcon(product.type)} {product.type}
                </span>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{product.name}</h3>

                <p className={styles.description}>
                    {product.description}
                </p>

                <div className={styles.footer}>
                    <span className={styles.price}>{product.price} Р.</span>
                    <button onClick={() => { addToCart(product) }} className={styles.addToCartBtn}>
                        В корзину 🛒
                    </button>
                </div>
            </div>
        </div>
    );
}