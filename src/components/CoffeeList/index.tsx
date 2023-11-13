import { useState } from "react";
import { coffeeData } from "../../data/coffeeData";
import { CardList, CoffeeListContainer, CoffeeListTitle } from "./styles";
import { ICoffee } from "../../@types/Coffee";
import { Card } from "../Card";

export function CoffeeList() {
    const [coffee, setCoffee] = useState<ICoffee[]>(coffeeData)
    const [cart, setCart] = useState<ICoffee[]>([])

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
        <CoffeeListContainer>
            <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

            <CardList>
                {coffee.map((coffeeItem) => (
                    <Card onSaveCart={handleSaveCart} onDeleteCart={handleDecreaseToCart} onAddCart={handleIncreaseToCart} key={coffeeItem.id} coffeeData={coffeeItem} />
                ))}
            </CardList>
        </CoffeeListContainer>
    )
}