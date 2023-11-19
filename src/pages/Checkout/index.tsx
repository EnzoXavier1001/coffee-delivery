import { ButtonRemove, ButtonsWrapper, CardDivider, CheckoutContainer, CloseOrder, CoffeeCard, CoffeeCardWrapper, CoffeeDisplay, CoffeeDisplayContainer, CoffeeDisplayList, CoffeeTotalAmount, EmptyList, FormCheckout } from "./styles";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import * as zod from 'zod'
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { formatAmount } from "../../utils/formatAmount";
import { OrderInfo } from "../Success";
import emptyCartImg from '../../assets/empty-cart.svg'
import { zodResolver } from '@hookform/resolvers/zod'
import { CoffeeForm } from "./components/CoffeeForm";

const CheckoutFormValidationSchema = zod.object({
    cep: zod.string().min(8).max(9),
    street: zod.string().min(1),
    number: zod.number(),
    complement: zod.string(),
    district: zod.string(),
    city: zod.string(),
    uf: zod.string(),
    formPayment: zod.string()
})

type CheckoutFormData = zod.infer<typeof CheckoutFormValidationSchema>

export function Checkout() {
    const navigate = useNavigate()
    const { cart, handleAddCartQuantity, handleDeleteCoffee, handleRemoveCartQuantity} = useContext(CartContext)
    const newUserInfo = useForm<CheckoutFormData>({
        resolver: zodResolver(CheckoutFormValidationSchema),
        defaultValues: {
            cep: '',
            street: '',
            complement: '',
            number: 0,
            district: '',
            city: '',
            uf: '',
            formPayment: 'Cartão de Crédito'
        }
    })
    const { handleSubmit, reset } = newUserInfo

    const totalCart: number = cart.reduce((prevCart, cartItem) => {
        const itemTotal = cartItem.price * cartItem.quantity!;
        return prevCart + itemTotal;
    }, 0);

    const totalCartWithDelivery = totalCart + 3.50

    const totalCartHasFreeShipping = totalCartWithDelivery > 100 ? 'Entrega Grátis' : `R$ ${formatAmount(3.50)}`

    const showAmountTotalCart = totalCartWithDelivery > 100 ? formatAmount(totalCart) : formatAmount(totalCartWithDelivery)

    function handleCreateOrder(data: CheckoutFormData) {
        console.log(data)
        const { cep, city, complement, district, number, street, uf, formPayment } = data 
        const newOrder: OrderInfo = {
            address: {
                cep, 
                city, 
                complement, 
                district, 
                number, 
                street, 
                uf
            },
            formPayment
        }
        localStorage.setItem('@CoffeeDelivery:order', JSON.stringify(newOrder))
        reset()
        navigate("/checkout/success")
    }

    return (
        <CheckoutContainer>
            <FormCheckout onSubmit={handleSubmit(handleCreateOrder)}>
                <FormProvider {...newUserInfo}>
                    <CoffeeForm />
                </FormProvider>
                <CoffeeDisplay>
                    <h2>Cafés selecionados</h2>
                    <CoffeeDisplayContainer>
                        <CoffeeDisplayList>
                            {cart.length > 0 ? (
                                cart.map((cartItem) => (
                                    <div key={cartItem.id}>
                                        <div>
                                            <CoffeeCard>
                                                <img src={cartItem.img} alt={cartItem.name} />
                                                <CoffeeCardWrapper>
                                                    <header>
                                                        <h3>{cartItem.name}</h3>
                                                        <span>R$ {formatAmount(cartItem.price)}</span>
                                                    </header>
                                                    <ButtonsWrapper>
                                                        <div>
                                                            <button type="button" onClick={() => handleRemoveCartQuantity(cartItem.id)}><Minus size={14} color="#8047F8" weight="bold" /></button>
                                                            <span>{cartItem.quantity}</span>
                                                            <button type="button" onClick={() => handleAddCartQuantity(cartItem.id)}><Plus size={14} color="#8047F8" weight="bold" /></button>
                                                        </div>
                                                        <ButtonRemove onClick={() => handleDeleteCoffee(cartItem.id)}><Trash size={18} color="#8047F8" weight="bold" />Remover</ButtonRemove>
                                                    </ButtonsWrapper>
                                                </CoffeeCardWrapper>
                                            </CoffeeCard>
                                            <CardDivider />
                                        </div>
                                    </div>
                                ))
                            ): (
                                <EmptyList>
                                    <img src={emptyCartImg} alt="Imagem de um homem segurando um papel ao lado de um carrinho vazio" />
                                    <p>Não ha nenhum item na lista</p>
                                </EmptyList>
                            )}
                            {cart.length > 0 && (
                                 <CoffeeTotalAmount>
                                    <div>
                                        <span>Total de itens</span>
                                        <span>R$ {formatAmount(totalCart)}</span>
                                    </div>
                                    <div>
                                        <span>Entrega</span>
                                        <span>{totalCartHasFreeShipping}</span>
                                    </div>
                                    <div>
                                        <span><strong>Total</strong></span>
                                        <span>R$ {showAmountTotalCart}</span>
                                    </div>
                                    <p>Entre grátis acima de 100*</p>
                                 </CoffeeTotalAmount>
                            )}
                             
                            <CloseOrder type="submit" disabled={!cart.length}>Confirmar perdido</CloseOrder>
                        </CoffeeDisplayList>
                    </CoffeeDisplayContainer>
                </CoffeeDisplay>
            </FormCheckout>
        </CheckoutContainer>
    )
}