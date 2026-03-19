// Hooks/useProduct.ts
import { useEffect, useState, useMemo } from "react";
import type { Product } from "../Models/Product";
import { FetchProductsByType } from "../Api/FetchProducts";

type Categorys = "all" | "electric" | "bass" | "acoustic" | "accessory";

export function useProduct() {
    const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [category, setCategory] = useState<Categorys>("all");
    const [curentPage, setCurentPage] = useState(1);
    const productsPerPage = 5;

    useEffect(() => {
        setLoading(true);
        setCurentPage(1);

        FetchProductsByType(category)
            .then((data) => {
                setProducts(data || []);
            })
            .catch(() => {
                setProducts([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [category]);

    const safeProducts = Array.isArray(products) ? products : [];
    const startIndex = (curentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const curentProducts = safeProducts.slice(startIndex, endIndex);
    const totalPages = Math.max(1, Math.ceil(safeProducts.length / productsPerPage));

    return {
        curentProducts,
        loading,
        category,
        curentPage,
        totalPages,
        setCategory,
        setCurentPage
    };
}