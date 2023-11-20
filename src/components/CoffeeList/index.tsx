import { useContext } from "react";
import { CardList, CoffeeListContainer, CoffeeListTitle } from "./styles";
import { Card } from "../Card";
import { CartContext } from "../../context/CartContext";

export function CoffeeList() {
    const { coffeeList, handleIncreaseCart, handleSaveCart, handleDecreaseCart} = useContext(CartContext)

    return (
        <CoffeeListContainer>
            <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

            <CardList title="Lista de cafés">
                {coffeeList.map((coffee) => (
                    <Card 
                        key={coffee.id} 
                        coffee={coffee} 
                        onSaveCart={handleSaveCart} 
                        onDeleteCart={handleDecreaseCart} 
                        onAddCart={handleIncreaseCart} 
                    />
                ))}
            </CardList>
        </CoffeeListContainer>
    )
}