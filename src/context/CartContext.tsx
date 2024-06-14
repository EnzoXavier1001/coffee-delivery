import { ReactNode, createContext, useEffect, useReducer } from "react";
import { ICoffee } from "../@types/Coffee";
import { coffeeData } from "../data/coffeeData";
import { toast } from 'react-toastify';
import { CoffeeState, coffeeReducer } from "../reducers/coffee/reducer";
import { addCartQuantity, decreaseNewValueCart, deleteCoffee, increaseNewValueCart, loadAllCart, removeCartQuantity, saveCart } from "../reducers/coffee/actions";

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
    const initialCoffeeState: CoffeeState = {
        coffeeList: coffeeData,
        cart: [],
      };

    const [coffee, dispatch] = useReducer(coffeeReducer, initialCoffeeState)
    const { coffeeList, cart } = coffee;

    useEffect(() => {
       dispatch(loadAllCart())
    }, []);

    useEffect(() => {
        if(cart && cart.length > 0) {
            localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(cart))
        }
    }, [cart])

    function handleIncreaseCart(id: string) {
        dispatch(increaseNewValueCart(id))
    }

    function handleDecreaseCart(id: string) {
        dispatch(decreaseNewValueCart(id))
    }

    async function handleSaveCart(coffee: ICoffee) {
        dispatch(saveCart(coffee))

        toast.success('Item adicionado ao carrinho com sucesso')
    }

    function handleAddCartQuantity(id: string) {
        dispatch(addCartQuantity(id))
    }

    function handleRemoveCartQuantity(id: string) {
        dispatch(removeCartQuantity(id))
    }

    function handleDeleteCoffee(id: string) {
        dispatch(deleteCoffee(id))
    }
   
    return (
        <CartContext.Provider value={{
           coffeeList,
           cart,
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