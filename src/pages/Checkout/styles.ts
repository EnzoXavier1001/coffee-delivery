import styled from "styled-components";

export const CheckoutContainer = styled.main`
   max-width: 112rem;
   margin: 4.0rem auto;

   display: flex;
   align-items: flex-start;
   gap: 3.2rem;
`

export const FormWrapper = styled.div`
    flex: 2;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`

export const BaseCardLayout = styled.div`
    background: ${props => props.theme['--base-card']};
    padding: 4.0rem;
    border-radius: 6px;
`


export const FormCheckoutStyles = styled(BaseCardLayout)``


export const FormCheckout = styled.form`
    display: flex;
    align-items: flex-start;
    gap: 3.2rem;
    width: 100%;
`

export const CoffeeDisplay = styled.div`
    flex: 1;
`

export const FormPayment = styled(BaseCardLayout)``