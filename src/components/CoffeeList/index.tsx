import { useState } from "react";
import { coffeeData } from "../../data/coffeeData";
import { CardList, CoffeeListContainer, CoffeeListTitle } from "./styles";
import { ICoffee } from "../../@types/Coffee";
import { Card } from "../Card";

export function CoffeeList() {
    const [coffee, setCoffee] = useState<ICoffee[]>(coffeeData)

    return (
        <CoffeeListContainer>
            <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

            <CardList>
                {coffee.map(coffeeItem => (
                    <Card coffeeData={coffeeItem} />
                ))}
            </CardList>
        </CoffeeListContainer>
    )
}