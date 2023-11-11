import { CartCounter, CurrentLocation, HeaderContainer } from "./styles";
import logoCoffeeDelivery from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />
            <nav>
                <CurrentLocation>
                    <MapPin size={24} weight="fill" color="#8047F8" /> 
                    <span>Praia Grande, SP</span>
                </CurrentLocation>
                <NavLink to="/checkout">
                    <ShoppingCart size={24} weight="fill" color="#C47F17" />
                    <CartCounter>
                        3
                    </CartCounter>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}