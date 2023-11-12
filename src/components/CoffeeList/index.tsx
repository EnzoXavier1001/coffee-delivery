import { useEffect, useState } from "react";
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

    function handleSaveCart(data: ICoffee) {
        const newList = cart.filter(cartItem => {
            return cartItem.id !== data.id
        })

        if(cart.length > 0) {
            cart.map(cartItem => {
                if(cartItem.id !== data.id) {
                    setCart((state) => [...state, data])
                } else {
                    setCart([...newList, data])
                }
                return cartItem
            })
        } else {
            setCart((state) => [...state, data])
        }
    }

    useEffect(() => console.log(cart), [cart])

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