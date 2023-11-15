import { CartCounter, CurrentLocation, HeaderContainer } from "./styles";
import logoCoffeeDelivery from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export function Header() {
    const { cart } = useContext(CartContext)

    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />
            </NavLink>
            <nav>
                <CurrentLocation>
                    <MapPin size={24} weight="fill" color="#8047F8" /> 
                    <span>Praia Grande, SP</span>
                </CurrentLocation>
                <NavLink to="/checkout">
                    <ShoppingCart size={24} weight="fill" color="#C47F17" />
                    <CartCounter>
                        {cart.length}
                    </CartCounter>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}