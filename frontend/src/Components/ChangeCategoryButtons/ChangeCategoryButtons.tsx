import styles from "./ChangeCategoryButtons.module.scss";

type Categorys = "all" | "electric" | "bass" | "acoustic" | "accessory"

interface ChangeCategoryButtonsProps {
    category: Categorys
    setCategory: (category: Categorys) => void
}

export function ChangeCategoryButtons({ category, setCategory }: ChangeCategoryButtonsProps) {
    return (
        <div className={styles.buttonsContainer}>
            <button
                className={category == "all" ? styles.active : styles.categoryButton}
                onClick={() => { setCategory("all") }}
            >
                Все товары
            </button>
            <button
                className={category == "electric" ? styles.active : styles.categoryButton}
                onClick={() => { setCategory("electric") }}
            >
                Электрогитары
            </button>
            <button
                className={category == "bass" ? styles.active : styles.categoryButton}
                onClick={() => { setCategory("bass") }}
            >
                Бас-гитары
            </button>
            <button
                className={category == "acoustic" ? styles.active : styles.categoryButton}
                onClick={() => { setCategory("acoustic") }}
            >
                Акустические гитары
            </button>
            <button
                className={category == "accessory" ? styles.active : styles.categoryButton}
                onClick={() => { setCategory("accessory") }}
            >
                Аксессуары
            </button>
        </div>
    );
}