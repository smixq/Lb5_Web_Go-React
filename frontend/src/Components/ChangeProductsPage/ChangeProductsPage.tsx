import styles from "./ChangeProductsPage.module.scss";

interface ChangeProductsPageProps {
    curentPage: number
    totalPages: number
    setCurentPage: (page: number) => void
}

export function ChangeProductsPage({ curentPage, totalPages, setCurentPage }: ChangeProductsPageProps) {
    const pagesList: number[] = []
    for (let i = 1; i <= totalPages; i++) {
        pagesList.push(i)
    }

    return (
        <div className={styles.paginationContainer}>
            <button
                className={styles.navButton}
                onClick={() => setCurentPage(curentPage - 1)}
                disabled={curentPage === 1}
            >
                ← Назад
            </button>

            {pagesList.map((page) => (
                curentPage === page ?
                    <span key={page} className={styles.currentPage}>{page}</span> :
                    <button
                        key={page}
                        className={styles.pageButton}
                        onClick={() => { setCurentPage(page) }}
                    >
                        {page}
                    </button>
            ))}

            <button
                className={styles.navButton}
                onClick={() => setCurentPage(curentPage + 1)}
                disabled={curentPage === totalPages}
            >
                Вперед →
            </button>
        </div>
    );
}