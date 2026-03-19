import type { Product } from "../../Models/Product";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./ProductsList.module.scss";

interface ProductsListProps {
    products: Product[]
}

export function ProductsList({ products }: ProductsListProps) {
    if (products.length === 0) {
        return <div className={styles.emptyMessage}>Товары не найдены</div>;
    }

    return (
        <div className={styles.productsGrid}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}