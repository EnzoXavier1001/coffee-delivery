import { HeaderContainer, HeaderWrapper } from "./styles";
import logoCoffeeDelivery from '../../assets/Logo.svg'
import { ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />
                <nav>
                    <p>Praia Grande, SP</p>
                    <NavLink to="/checkout">
                        <ShoppingCart size={20} />
                    </NavLink>
                </nav>
            </HeaderWrapper>
        </HeaderContainer>
    )
}