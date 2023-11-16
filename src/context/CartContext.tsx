import { ReactNode, createContext, useEffect, useState } from "react";
import { ICoffee } from "../@types/Coffee";
import { coffeeData } from "../data/coffeeData";
import { toast } from 'react-toastify';

interface CartContextType {
    coffeeList: ICoffee[],
    cart: ICoffee[],
    handleIncreaseCart: (id: string) => void
    handleDecreaseCart: (id: string) => void
    handleSaveCart: (data: ICoffee) => void
    handleAddCartQuantity: (id: string) => void
    handleRemoveCartQuantity: (id: string) => void
    handleDeleteCoffee: (id: string) => void
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [coffeeList, setCoffeeList] = useState<ICoffee[]>(coffeeData)
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

    function handleIncreaseCart(id: string) {
        const newList = coffeeList.map(item => {
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

        setCoffeeList([...newList])
    }

    function handleDecreaseCart(id: string) {
        const newList = coffeeList.map(item => {
            if(item.id === id) {
                if(item.quantity) {
                    const list = { ...item, quantity: item.quantity - 1}
                    return list
                }
            }
            return item
        })

        setCoffeeList([...newList])
    }

    async function handleSaveCart(coffee: ICoffee) {
        const coffeeExistsInCart = cart.findIndex(cartItem => cartItem.id === coffee.id)

        if(coffeeExistsInCart !== -1) {
            const newCart = [...cart]
            newCart[coffeeExistsInCart].quantity = coffee.quantity
            setCart([...newCart])
        } else {
            setCart((prevState) => [...prevState, coffee])
        }

        toast.success('Item adicionado ao carrinho com sucesso')
    }

    function handleAddCartQuantity(id: string) {
        const newList = cart.map(item => {
            if(item.id === id) {
                if(!item.quantity) {
                    return { ...item, quantity: 1}
                } else {
                    return { ...item, quantity: item.quantity + 1}
                }
            }
            return item
        })

        setCart([...newList])
    }

    function handleRemoveCartQuantity(id: string) {
        const newList = cart.map(item => {
            if(item.id === id) {
                if(item.quantity! > 0) {
                    return { ...item, quantity: item.quantity! - 1}
                }
            }
            return item
        })

        setCart([...newList])
    }

    function handleDeleteCoffee(id: string) {
        const newList = cart.filter(item => {
            return item.id !== id
        })

        setCart([...newList])
    }
   
    return (
        <CartContext.Provider value={{
           cart,
           coffeeList,
           handleIncreaseCart,
           handleDecreaseCart,
           handleAddCartQuantity,
           handleRemoveCartQuantity,
           handleDeleteCoffee,
           handleSaveCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}