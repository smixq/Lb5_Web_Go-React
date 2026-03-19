// Components/Home/Home.tsx
import { useProduct } from "../../Hooks/useProduct";
import { useCart } from "../../Providers/CartProvider";
import { ChangeProductsPage } from "../../Components/ChangeProductsPage/ChangeProductsPage";
import { ProductsList } from "../ProductsList/ProductsList";
import { ChangeCategoryButtons } from "../ChangeCategoryButtons/ChangeCategoryButtons";
import { CartButton } from "../CartButton/CartButton";
import { Cart } from "../Cart/Cart";
import styles from "./Home.module.scss";
import logo from "../../assets/img/logo.png"

export function Home() {
    const {
        curentProducts,
        loading,
        category,
        curentPage,
        totalPages,
        setCategory,
        setCurentPage
    } = useProduct();

    const { cart, cartOpen, setCartOpen } = useCart(); // Берем cart из контекста!

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loadingSpinner}></div>
            </div>
        );
    }

    return (
        <div className={styles.homeContainer}>
            <header>
                <a href="/">
                    <img src={logo} alt="" />
                </a>
                <div className={styles.center}>
                    <ChangeCategoryButtons category={category} setCategory={setCategory} />

                </div>

            </header>

            <Cart />
            <CartButton cartOpen={cartOpen} setOpenCart={setCartOpen} />
            <div className={styles.content}>
                <ProductsList products={curentProducts} />
            </div>
            <ChangeProductsPage
                totalPages={totalPages}
                curentPage={curentPage}
                setCurentPage={setCurentPage}
            />
            <footer>
                <p>&copy; 2026 Магазин гитар Адресс: ул. Ленина, 10, Москва</p>
            </footer>
        </div>
    );
}