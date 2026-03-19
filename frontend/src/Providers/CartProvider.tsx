// Providers/CartProvider.tsx
import React, { createContext, useContext, useState } from "react";
import type { Product } from "../Models/Product";
import { CustomAlert } from "../Components/Alerts/CustomAlert";

type CartContextType = {
    cart: Product[];
    cartOpen: boolean;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    setCartOpen: (open: boolean) => void;
    cleanCart: () => void;
    calculateTotalPrice: () => number;
    byBtn: () => void;
};


const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<Product[]>([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null)

    const addToCart = (product: Product) => {
        setCart(prev => {
            if (prev.some(item => item.id === product.id)) {
                return prev;
            }
            setAlert({
                message: `✅ ${product.name} добавлен в корзину!`,
                type: 'success'
            });
            return [...prev, product];
        });
    };

    const removeFromCart = (id: number) => {
        const product = cart.find(item => item.id === id);
        setCart(prev => prev.filter(item => item.id !== id));
        setAlert({
            message: `❌ ${product?.name} удален из корзины`,
            type: 'error'
        });
    };

    const cleanCart = () => {
        setCart([]);
        setAlert({
            message: `❌ Карзина отчищена!`,
            type: 'error'
        });
    }

    const byBtn = () => {
        setCart([])
        setAlert({
            message: `✅ Все товары куплуны!`,
            type: 'success'
        });
    }
    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => total + Number(product.price), 0);
    };
    return (
        <CartContext.Provider value={{
            cart,
            cartOpen,
            addToCart,
            removeFromCart,
            setCartOpen,
            cleanCart,
            calculateTotalPrice,
            byBtn
        }}>
            {children}
            {alert && (
                <CustomAlert
                    message={alert.message}
                    type={alert.type}
                    onClose={() => setAlert(null)}
                />
            )}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
}