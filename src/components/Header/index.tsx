import { CartCounter, CurrentLocation, HeaderContainer } from "./styles";
import logoCoffeeDelivery from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export function Header() {
    const { cart } = useContext(CartContext)

    return (
        <HeaderContainer id="header">
            <NavLink to="/" title="Ir para a página inicial">
                <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />
            </NavLink>
            <nav>
                <CurrentLocation title="Localização Atual">
                    <MapPin size={24} weight="fill" color="#8047F8" /> 
                    <span>Praia Grande, SP</span>
                </CurrentLocation>
                <NavLink to="/checkout" title="Ir para o carrinho">
                    <ShoppingCart size={24} weight="fill" color="#C47F17" />
                    <CartCounter title="Quantidade de items no carrinho">
                        {cart ? cart.length : 0}
                    </CartCounter>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}