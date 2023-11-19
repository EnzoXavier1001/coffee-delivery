import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { FormWrapper, FormCheckoutStyles, ButtonWrapper, FormGroup, FormPayment } from "./styles";
import { ButtonPayment } from "../../styles";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

interface formPayment {
    creditCard: boolean
    debitCard: boolean
    money: boolean
}

export function CoffeeForm() {
    const { register } = useFormContext()
    const [isActive, setIsActive] = useState<formPayment>({
        creditCard: true,
        debitCard: false,
        money: false,
    })

    function handleUpdateFormPayment(payment: string) {
        switch(payment) {
            case 'creditCard':
                setIsActive({
                    creditCard: true,
                    debitCard: false,
                    money: false
                })
                break
            case 'debitCard':
                setIsActive({
                    creditCard: false,
                    debitCard: true,
                    money: false
                })
            break
            case 'money':
                setIsActive({
                    creditCard: false,
                    debitCard: false,
                    money: true
                })
            break
            default:
                setIsActive({
                    creditCard: true,
                    debitCard: false,
                    money: false
                })
        }
    }
    
    return (
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
                            <input type="text" placeholder="Número" {...register("number", { valueAsNumber: true })} required/>
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
                            <ButtonPayment onClick={() => handleUpdateFormPayment('creditCard')} $isPaymentActive={isActive.creditCard}>
                                <input  type="radio" {...register('formPayment')} name="formPayment" id="creditCard" value="Cartão de Crédito" />
                                <CreditCard id="creditCard" size={20} color="#557b39" weight="bold" />
                                Cartão de crédito
                            </ButtonPayment>
                            <ButtonPayment onClick={() => handleUpdateFormPayment('debitCard')} $isPaymentActive={isActive.debitCard}>
                                <input type="radio" {...register('formPayment')} name="formPayment" id="debitCard" value="Cartão de Débito" />
                                <Bank id="debitCard" size={20} color="#557b39" weight="bold" />
                                Cartão de débito
                            </ButtonPayment>
                            <ButtonPayment onClick={() => handleUpdateFormPayment('money')} $isPaymentActive={isActive.money}>
                                <input type="radio" {...register('formPayment')} name="formPayment" id="money" value="Dinheiro" />
                                <Money id="money"  size={20} color="#557b39" weight="bold" />
                                Dinheiro
                            </ButtonPayment>
                        </ButtonWrapper>
                    </FormPayment>
                </FormWrapper>
    )
}