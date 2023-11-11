import { MapPinLine } from "@phosphor-icons/react";
import { CheckoutContainer, CloseOrder, CoffeeDisplay, FormCheckout, FormCheckoutStyles, FormPayment, FormWrapper } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from 'zod'

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

                        <div>
                            <input type="text" placeholder="Número" {...register("number")}/>
                            <input type="text" placeholder="Complemento" {...register("complement")}/>
                        </div>

                        <div>
                            <input type="text" placeholder="Bairro" {...register("district")}/>
                            <input type="text" placeholder="Cidade" {...register("city")}/>
                            <input type="text" placeholder="UF" {...register("uf")}/>
                        </div>
                    </FormCheckoutStyles>
                    <FormPayment>
                        <header>
                            <h3>Pagamento</h3>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </header>

                        <div>
                            <button>
                                Cartão de crédito
                            </button>
                            <button>
                                Cartão de débito
                            </button>
                            <button>
                                Dinheiro
                            </button>
                        </div>
                    </FormPayment>
                </FormWrapper>
                <CoffeeDisplay>
                    <h2>Cafés selecionados</h2>
                    <CloseOrder type="submit">Confirmar perdido</CloseOrder>
                </CoffeeDisplay>
            </FormCheckout>
        </CheckoutContainer>
    )
}