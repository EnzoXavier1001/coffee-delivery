import { ButtonRemove, ButtonsWrapper, CardDivider, CheckoutContainer, CloseOrder, CoffeeCard, CoffeeCardWrapper, CoffeeDisplay, CoffeeDisplayContainer, CoffeeDisplayList, CoffeeTotalAmount, EmptyList, FormCheckout } from "./styles";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { FormProvider } from "react-hook-form";
import { formatAmount } from "../../utils/formatAmount";
import emptyCartImg from '../../assets/empty-cart.svg'
import { CoffeeForm } from "./components/CoffeeForm";
import { useCheckout } from "../../hooks/useCheckout";


export function Checkout() {
    const {cart, totalCart, newUserInfo, handleAddCartQuantity, handleDeleteCoffee, handleRemoveCartQuantity, handleCreateOrder, totalCartHasFreeShipping, showAmountTotalCart, canSubmit, handleSubmit } = useCheckout()

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
                             
                            <CloseOrder type="submit" disabled={canSubmit}>Confirmar perdido</CloseOrder>
                        </CoffeeDisplayList>
                    </CoffeeDisplayContainer>
                </CoffeeDisplay>
            </FormCheckout>
        </CheckoutContainer>
    )
}