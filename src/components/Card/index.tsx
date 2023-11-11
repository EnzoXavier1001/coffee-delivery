import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ICoffee } from "../../@types/Coffee"
import { ButtonCart, BuyNowCartWrapper, BuyNowWrapper, CardAmount, CardContainer, CardDescription, CardFooter, CardTags, CardTitle, TagContainer } from "./styles"

interface CardProps {
    coffeeData: ICoffee
    onAddCart: (id: string) => void
    onDeleteCart: (id: string) => void
    onSaveCart: (data: ICoffee) => void
}

export function Card({ coffeeData, onAddCart, onDeleteCart, onSaveCart }: CardProps) {
    const formattedAmount = coffeeData.amount.toLocaleString('pt-br', {minimumFractionDigits: 2});
    const { tags } = coffeeData

    return (
        <CardContainer>
            <img src={coffeeData.img} alt={coffeeData.name} />
            <TagContainer>
                {tags.map(tag => (
                    <CardTags key={tag}>
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
                            <button onClick={() => onDeleteCart(coffeeData.id)}><Minus size={16} color="#8047F8" weight="bold" /></button>
                            <span>{coffeeData.quantity ? coffeeData.quantity : 1}</span>
                            <button onClick={() => onAddCart(coffeeData.id)}><Plus size={16} color="#8047F8" weight="bold" /></button>
                        </div>
                    </BuyNowWrapper>
                    <ButtonCart onClick={() => onSaveCart(coffeeData)}>
                        <ShoppingCart size={24} weight="fill" color="#FFF" />
                    </ButtonCart>
                </BuyNowCartWrapper>
            </CardFooter>
        </CardContainer>
    )
}