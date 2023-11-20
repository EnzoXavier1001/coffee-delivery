import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ICoffee } from "../../@types/Coffee"
import { ButtonCart, BuyNowCartWrapper, BuyNowWrapper, CardAmount, CardContainer, CardDescription, CardFooter, CardTags, CardTitle, TagContainer } from "./styles"
import { formatAmount } from "../../utils/formatAmount";

interface CardProps {
    coffee: ICoffee
    onAddCart: (id: string) => void
    onDeleteCart: (id: string) => void
    onSaveCart: (coffee: ICoffee) => void
}

export function Card({ coffee, onAddCart, onDeleteCart, onSaveCart }: CardProps) {
    const { tags } = coffee
    const formattedAmount = formatAmount(coffee.price);

    return (
        <CardContainer>
            <img src={coffee.img} alt={coffee.name} />
            <TagContainer>
                {tags.map(tag => (
                    <CardTags key={tag} title="Categoria do produto">
                        {tag}
                    </CardTags>
                ))}
            </TagContainer>
            <CardTitle>
                {coffee.name}
            </CardTitle>
            <CardDescription>
                {coffee.description}
            </CardDescription>
            <CardFooter>
                <CardAmount><small title="Valor monetário do Café" aria-label={formattedAmount}>R$</small>{formattedAmount}</CardAmount>

                <BuyNowCartWrapper>
                    <BuyNowWrapper>
                        <div>
                            <button type="button" onClick={() => onDeleteCart(coffee.id)} title="Diminuir a quantidade de item para adicionar no carrinho">
                                <Minus size={16} color="#8047F8" weight="bold" />
                            </button>
                            <span>{coffee.quantity ?? 1}</span>
                            <button type="button" onClick={() => onAddCart(coffee.id)} title="Aumentar a quantidade de item para adicionar no carrinho">
                                <Plus size={16} color="#8047F8" weight="bold" />
                            </button>
                        </div>
                    </BuyNowWrapper>
                    <ButtonCart onClick={() => onSaveCart(coffee)} title="Salvar novo item no carrinho">
                        <ShoppingCart size={24} weight="fill" color="#FFF" />
                    </ButtonCart>
                </BuyNowCartWrapper>
            </CardFooter>
        </CardContainer>
    )
}