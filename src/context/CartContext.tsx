import { ReactNode, createContext, useEffect, useState } from "react";
import { ICoffee } from "../@types/Coffee";
import { coffeeData } from "../data/coffeeData";

interface CartContextType {
    coffee: ICoffee[],
    cart: ICoffee[],
    handleIncreaseToCart: (id: string) => void
    handleDecreaseToCart: (id: string) => void
    handleSaveCart: (data: ICoffee) => void
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [coffee, setCoffee] = useState<ICoffee[]>(coffeeData)
    const [cart, setCart] = useState<ICoffee[]>([])

    useEffect(() => {
        const coffeeStored = JSON.parse(localStorage.getItem('@cart')!)

        setCart(coffeeStored)
    }, [])

    function handleIncreaseToCart(id: string) {
        const newList = coffee.map(item => {
            if(item.id === id) {
                if(!item.quantity) {
                    const list = { ...item, quantity: 1}
                    return list
                } else {
                    const list = { ...item, quantity: item.quantity + 1}
                    return list
                }
            }
            return item
        })

        setCoffee([...newList])
    }

    function handleDecreaseToCart(id: string) {
        const newList = coffee.map(item => {
            if(item.id === id) {
                if(item.quantity) {
                    const list = { ...item, quantity: item.quantity - 1}
                    return list
                }
            }
            return item
        })

        setCoffee([...newList])
    }

    async function handleSaveCart(data: ICoffee) {
        const coffeeExistsInCart = cart.findIndex(cartItem => cartItem.id === data.id)

        if(cart.length > 0) {
            if(coffeeExistsInCart !== -1) {
                const newCart = [...cart]
                newCart[coffeeExistsInCart].quantity = data.quantity
                localStorage.setItem('@cart', JSON.stringify(newCart))
                setCart([...newCart])
            } else {
                const newCart = [...cart, data]
                localStorage.setItem('@cart', JSON.stringify(newCart))
                setCart(newCart)
            }
        } else {
            const newCart = [...cart, data]
            localStorage.setItem('@cart', JSON.stringify(newCart))
            setCart(newCart)
        }
    }
   
    return (
        <CartContext.Provider value={{
           cart,
           coffee,
           handleDecreaseToCart,
           handleSaveCart,
           handleIncreaseToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}