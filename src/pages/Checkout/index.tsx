import { CheckoutContainer, CoffeeDisplay, FormCheckout, FormCheckoutStyles, FormPayment, FormWrapper } from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer>
            <FormCheckout>
                <FormWrapper>
                    <h2>Complete seu pedido</h2>
                    <FormCheckoutStyles>
                        <header>
                            <h3>Endereço de Entrega</h3>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </header>

                        <input type="text" placeholder="CEP" />

                        <input type="text" placeholder="Rua"  />

                        <div>
                            <input type="text" placeholder="Número"/>
                            <input type="text" placeholder="Complemento"/>
                            <input type="text" placeholder="Opcional"/>
                        </div>

                        <div>
                            <input type="text" placeholder="Bairro"/>
                            <input type="text" placeholder="Cidade"/>
                            <input type="text" placeholder="UF"/>
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

                </CoffeeDisplay>
            </FormCheckout>
        </CheckoutContainer>
    )
}