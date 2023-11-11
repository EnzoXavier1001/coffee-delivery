import { ICoffee } from "../../@types/Coffee"
import { CardAmount, CardContainer, CardDescription, CardFooter, CardTags, CardTitle, TagContainer } from "./styles"

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

                <div>
                    <div>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
            </CardFooter>
        </CardContainer>
    )
}