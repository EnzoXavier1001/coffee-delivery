import { ReactNode, createContext, useEffect, useState } from "react";
import { ICoffee } from "../@types/Coffee";
import { coffeeData } from "../data/coffeeData";
import { toast } from 'react-toastify';

interface CartContextType {
    coffee: ICoffee[],
    cart: ICoffee[],
    handleIncreaseToCart: (id: string) => void
    handleDecreaseToCart: (id: string) => void
    handleSaveCart: (data: ICoffee) => void
    handleAddToCart: (id: string) => void
    handleRemoveAllProducts: (id: string) => void
    handleDeleteToCart: (id: string) => void
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [coffee, setCoffee] = useState<ICoffee[]>(coffeeData)
    const [cart, setCart] = useState<ICoffee[]>([])

    useEffect(() => {
        const coffeeStored = JSON.parse(localStorage.getItem('@CoffeeDelivery:cart')!)

        if(coffeeStored) {
            setCart(coffeeStored)
        } 
    }, [])

    useEffect(() => {
        if(cart.length > 0) {
            localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(cart));
        }
    }, [cart]);

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
                localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(newCart))
                setCart([...newCart])
            } else {
                const newCart = [...cart, data]
                localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(newCart))
                setCart(newCart)
            }
        } else {
            const newCart = [...cart, data]
            localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(newCart))
            setCart(newCart)
        }

        toast.success('Item adicionado ao carrinho com sucesso')
    }

    function handleAddToCart(id: string) {
        const newList = cart.map(item => {
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

        setCart([...newList])
    }

    function handleDeleteToCart(id: string) {
        const newList = cart.map(item => {
            if(item.id === id) {
                if(item.quantity) {
                    return { ...item, quantity: item.quantity - 1}
                } 
            }
            return item
        })


        setCart([...newList])
    }

    function handleRemoveAllProducts(id: string) {
        const newList = cart.filter(item => {
            return item.id !== id
        })

        setCart([...newList])
    }
   
    return (
        <CartContext.Provider value={{
           cart,
           coffee,
           handleDecreaseToCart,
           handleRemoveAllProducts,
           handleAddToCart,
           handleDeleteToCart,
           handleSaveCart,
           handleIncreaseToCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}