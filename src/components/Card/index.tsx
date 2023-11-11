import { ICoffee } from "../../@types/Coffee"
import { CardContainer, CardDescription, CardFooter, CardTags, CardTitle, TagContainer } from "./styles"

interface CardProps {
    coffeeData: ICoffee
}

export function Card({ coffeeData }: CardProps) {
    const { tags } = coffeeData

    return (
        <CardContainer>
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
                <span>{coffeeData.amount}</span>

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