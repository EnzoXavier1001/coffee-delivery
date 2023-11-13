import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { ButtonPayment, ButtonWrapper, CheckoutContainer, CloseOrder, CoffeeDisplay, FormCheckout, FormCheckoutStyles, FormGroup, FormPayment, FormWrapper } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from 'zod'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

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
    const { register, handleSubmit, reset } = useForm<CheckoutFormData>()

    const { cart } = useContext(CartContext)

    console.log(cart)
    
    function handleCreateOrder(data: CheckoutFormData) {
        localStorage.setItem('@user-info', JSON.stringify(data))
        console.log(data)
        reset()
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

                        <input type="text" placeholder="CEP" {...register("cep")} />

                        <input type="text" placeholder="Rua" {...register("street")}  />

                        <FormGroup>
                            <input type="text" placeholder="Número" {...register("number")}/>
                            <input type="text" placeholder="Complemento" {...register("complement")}/>
                        </FormGroup>

                        <FormGroup>
                            <input type="text" placeholder="Bairro" {...register("district")}/>
                            <input type="text" placeholder="Cidade" {...register("city")}/>
                            <input type="text" placeholder="UF" {...register("uf")}/>
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
                    <div>
                        <div>
                            <div>
                            
                            </div>
                        </div>

                        <div>
                            <div>
                                <span>Total de itens</span>
                                <span>R$ 29,70</span>
                            </div>
                            <div>
                                <span>Entrega</span>
                                <span>R$ 3,50</span>
                            </div>
                            <div>
                                <span>Total</span>
                                <span>R$ 33,20</span>
                            </div>
                        </div>
                        <CloseOrder type="submit">Confirmar perdido</CloseOrder>
                    </div>
                </CoffeeDisplay>
            </FormCheckout>
        </CheckoutContainer>
    )
}