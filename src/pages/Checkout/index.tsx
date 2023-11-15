import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "@phosphor-icons/react";
import { ButtonPayment, ButtonRemove, ButtonWrapper, ButtonsWrapper, CardDivider, CheckoutContainer, CloseOrder, CoffeeCard, CoffeeCardWrapper, CoffeeDisplay, CoffeeDisplayContainer, CoffeeDisplayList, CoffeeTotalAmount, FormCheckout, FormCheckoutStyles, FormGroup, FormPayment, FormWrapper } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from 'zod'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { ICoffee } from "../../@types/Coffee";
import { formatAmount } from "../../utils/formatAmount";

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
    const { handleAddToCart, handleRemoveAllProducts, handleDeleteToCart, cart } = useContext(CartContext)
    const { register, handleSubmit, reset } = useForm<CheckoutFormData>()

    const sumAllValues: number = cart.reduce((prev, cartItem) => {
        const itemTotal = cartItem.amount * cartItem.quantity!;
        return prev + itemTotal;
    }, 0);

    const totalWithDelivery = sumAllValues + 3.50

    function handleCreateOrder(data: CheckoutFormData) {
        const newOrder = {
            address: {
                ...data
            },
            formPayment: 'Cartão de Crédito'
        }
        reset()
        localStorage.setItem('@CoffeeDelivery:order', JSON.stringify(newOrder))
        navigate("/success")
    }

    function handleSaveNewCart(cartItem: ICoffee) {
        handleAddToCart(cartItem.id)
    }

    function handleRemoveProductOnCart(cartItem: ICoffee) {
        handleDeleteToCart(cartItem.id)
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
                                cart.map((cartItem, index) => (
                                    <>
                                    <div key={index}>
                                        <CoffeeCard>
                                            <img src={cartItem.img} alt={cartItem.name} />
                                            <CoffeeCardWrapper>
                                                <header>
                                                    <h3>{cartItem.name}</h3>
                                                    <span>R$ {formatAmount(cartItem.amount)}</span>
                                                </header>
                                                <ButtonsWrapper>
                                                    <div>
                                                        <button onClick={() => handleRemoveProductOnCart(cartItem)} type="button"><Minus size={14} color="#8047F8" weight="bold" /></button>
                                                        <span>{cartItem.quantity}</span>
                                                        <button onClick={() => handleSaveNewCart(cartItem)} type="button"><Plus size={14} color="#8047F8" weight="bold" /></button>
                                                    </div>
                                                    <ButtonRemove onClick={() => handleRemoveAllProducts(cartItem.id)} type="button"><Trash size={18} color="#8047F8" weight="bold" />Remover</ButtonRemove>
                                                </ButtonsWrapper>
                                            </CoffeeCardWrapper>
                                        </CoffeeCard>
                                        <CardDivider />
                                    </div>
                                
                                    <CoffeeTotalAmount>
                                    <div>
                                        <span>Total de itens</span>
                                        <span>R$ {formatAmount(sumAllValues)}</span>
                                    </div>
                                    <div>
                                        <span>Entrega</span>
                                        <span>R$ 3,50</span>
                                    </div>
                                    <div>
                                        <span><strong>Total</strong></span>
                                        <span>{totalWithDelivery > 100 ? 'Entrega grátis' : `R$ ${formatAmount(totalWithDelivery)}`}</span>
                                    </div>
                                    <p>Entre grátis acima de 100*</p>
                                </CoffeeTotalAmount>
                                <CloseOrder type="submit">Confirmar perdido</CloseOrder>
                                </>
                                ))
                            ): (
                                <p>não ha nenhum item na lista</p>
                            )}
                        </CoffeeDisplayList>
                    </CoffeeDisplayContainer>
                </CoffeeDisplay>
            </FormCheckout>
        </CheckoutContainer>
    )
}