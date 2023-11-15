import { useContext } from "react";
import { CardList, CoffeeListContainer, CoffeeListTitle } from "./styles";
import { Card } from "../Card";
import { CartContext } from "../../context/CartContext";

export function CoffeeList() {
    const { coffee, handleIncreaseToCart, handleSaveCart, handleDecreaseToCart} = useContext(CartContext)

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