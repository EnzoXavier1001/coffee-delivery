import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { HomeContainer, HomeContent, HomeSection, IconWrapper, ListBenefits } from "./styles";
import coffeeMainImage from '../../assets/coffee-main.png'
import { CoffeeList } from "../../components/CoffeeList";

export function Home() {
    return (
        <>
            <HomeContainer>
                <HomeSection>
                    <HomeContent>
                        <h1>Encontre o café perfeito <br /> para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                        <ListBenefits>
                            <li>
                                <IconWrapper $background="#C47F17">
                                    <ShoppingCart size={20} color="#fff" weight="fill" /> 
                                </IconWrapper>
                                Compra simples e segura
                            </li>
                            <li>
                                <IconWrapper $background="#574F4D">
                                    <Package size={20} color="#fff" weight="fill" /> 
                                </IconWrapper>
                                Embalagem mantém o café intacto
                            </li>
                            <li>
                                <IconWrapper $background="#DBAC2C">
                                    <Timer size={20} color="#fff" weight="fill" /> 
                                </IconWrapper>
                                Entrega rápida e rastreada
                            </li>
                            <li>
                                <IconWrapper $background="#8047F8">
                                    <Coffee size={20} color="#fff" weight="fill" /> 
                                </IconWrapper>
                                O café chega fresquinho até você
                            </li>
                        </ListBenefits>
                    </HomeContent>
                    <img src={coffeeMainImage} alt="" />
                </HomeSection>
            </HomeContainer>
            <CoffeeList />
        </>
    )
}