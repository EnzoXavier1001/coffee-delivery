import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "@phosphor-icons/react";
import { ButtonPayment, ButtonRemove, ButtonWrapper, ButtonsWrapper, CardDivider, CheckoutContainer, CloseOrder, CoffeeCard, CoffeeCardWrapper, CoffeeDisplay, CoffeeDisplayContainer, CoffeeDisplayList, CoffeeTotalAmount, FormCheckout, FormCheckoutStyles, FormGroup, FormPayment, FormWrapper } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from 'zod'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { formatAmount } from "../../utils/formatAmount";
import { OrderInfo } from "../Success";

const CheckoutFormValidationSchema = zod.object({
    cep: zod.string().min(8).max(9),
    street: zod.string().min(1),
    number: zod.number(),
    complement: zod.string(),
    district: zod.string(),
    city: zod.string(),
    uf: zod.string(),
})

type CheckoutFormData = zod.infer<typeof CheckoutFormValidationSchema>

export function Checkout() {
    const navigate = useNavigate()
    const { cart, handleAddCartQuantity, handleDeleteCoffee, handleRemoveCartQuantity} = useContext(CartContext)
    const { register, handleSubmit, reset } = useForm<CheckoutFormData>()

    const totalCart: number = cart.reduce((prevCart, cartItem) => {
        const itemTotal = cartItem.amount * cartItem.quantity!;
        return prevCart + itemTotal;
    }, 0);

    const totalCartWithDelivery = totalCart + 3.50

    const totalCartHasFreeShipping = totalCartWithDelivery > 100 ? 'Entrega Grátis' : `R$ ${formatAmount(3.50)}`

    const showAmountTotalCart = totalCartWithDelivery > 100 ? formatAmount(totalCart) : formatAmount(totalCartWithDelivery)

    function handleCreateOrder(data: CheckoutFormData) {
        const { cep, city, complement, district, number, street, uf } = data 
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
            formPayment: 'Cartão de Crédito'
        }
        localStorage.setItem('@CoffeeDelivery:order', JSON.stringify(newOrder))
        reset()
        navigate("/checkout/success")
    }

    return (
        <CheckoutContainer>
            <FormCheckout onSubmit={handleSubmit(handleCreateOrder)}>
                <FormWrapper>
                    <h2>Complete seu pedido</h2>
                    <FormCheckoutStyles>
                        <header>
                            <MapPinLine size={28} color="#C47F17" weight="bold" />
                            <div>
                                <h3>Endereço de Entrega</h3>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </header>

                        <input type="text" placeholder="CEP" {...register("cep")} required />

                        <input type="text" placeholder="Rua" {...register("street")} required  />

                        <FormGroup>
                            <input type="text" placeholder="Número" {...register("number")} required/>
                            <input type="text" placeholder="Complemento" {...register("complement")}/>
                        </FormGroup>

                        <FormGroup>
                            <input type="text" placeholder="Bairro" {...register("district")} required/>
                            <input type="text" placeholder="Cidade" {...register("city")} required/>
                            <input type="text" placeholder="UF" {...register("uf")} required/>
                        </FormGroup>
                    </FormCheckoutStyles>
                    <FormPayment>
                        <header>
                            <CurrencyDollar size={28} color="#557b39" weight="bold" />
                            <div>
                                <h3>Pagamento</h3>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </header>

                        <ButtonWrapper>
                            <ButtonPayment type="button">
                                <CreditCard size={20} color="#557b39" weight="bold" />
                                Cartão de crédito
                            </ButtonPayment>
                            <ButtonPayment type="button">
                                <Bank size={20} color="#557b39" weight="bold" />
                                Cartão de débito
                            </ButtonPayment>
                            <ButtonPayment type="button">
                                <Money size={20} color="#557b39" weight="bold" />
                                Dinheiro
                            </ButtonPayment>
                        </ButtonWrapper>
                    </FormPayment>
                </FormWrapper>
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
                                                        <span>R$ {formatAmount(cartItem.amount)}</span>
                                                    </header>
                                                    <ButtonsWrapper>
                                                        <div>
                                                            <button onClick={() => handleRemoveCartQuantity(cartItem.id)} type="button"><Minus size={14} color="#8047F8" weight="bold" /></button>
                                                            <span>{cartItem.quantity}</span>
                                                            <button onClick={() => handleAddCartQuantity(cartItem.id)} type="button"><Plus size={14} color="#8047F8" weight="bold" /></button>
                                                        </div>
                                                        <ButtonRemove onClick={() => handleDeleteCoffee(cartItem.id)} type="button"><Trash size={18} color="#8047F8" weight="bold" />Remover</ButtonRemove>
                                                    </ButtonsWrapper>
                                                </CoffeeCardWrapper>
                                            </CoffeeCard>
                                            <CardDivider />
                                        </div>
                                    </div>
                                ))
                            ): (
                                <p>não ha nenhum item na lista</p>
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