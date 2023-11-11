import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ICoffee } from "../../@types/Coffee"
import { ButtonCart, BuyNowCartWrapper, BuyNowWrapper, CardAmount, CardContainer, CardDescription, CardFooter, CardTags, CardTitle, TagContainer } from "./styles"

interface CardProps {
    coffeeData: ICoffee
}

export function Card({ coffeeData }: CardProps) {
    const formattedAmount = coffeeData.amount.toLocaleString('pt-br', {minimumFractionDigits: 2});
    const { tags } = coffeeData

    return (
        <CardContainer>
            <img src={coffeeData.img} alt={coffeeData.name} />
            <TagContainer>
                {tags.map(tag => (
                    <CardTags>
                        {tag}
                    </CardTags>
                ))}
            </TagContainer>
            <CardTitle>
                {coffeeData.name}
            </CardTitle>
            <CardDescription>
                {coffeeData.description}
            </CardDescription>
            <CardFooter>
                <CardAmount><small>R$</small>{formattedAmount}</CardAmount>

                <BuyNowCartWrapper>
                    <BuyNowWrapper>
                        <div>
                            <button><Minus size={16} color="#8047F8" weight="bold" /></button>
                            <span>1</span>
                            <button><Plus size={16} color="#8047F8" weight="bold" /></button>
                        </div>
                    </BuyNowWrapper>
                    <ButtonCart>
                        <ShoppingCart size={24} weight="fill" color="#FFF" />
                    </ButtonCart>
                </BuyNowCartWrapper>
            </CardFooter>
        </CardContainer>
    )
}