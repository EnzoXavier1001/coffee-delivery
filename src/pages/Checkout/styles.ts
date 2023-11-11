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

export const FormCheckoutStyles = styled(BaseCardLayout)`
    display: flex;
    flex-direction: column;
    
    header {
       display: flex;
       gap: 0.8rem;
       align-items: center;
       margin-bottom: 5.5rem;

       h3 {
            color: ${props => props.theme['--base-subtitle']};
            margin-bottom: 0.2rem;
            font-weight: 400;
       }

       p {
            color: ${props => props.theme['--base-text']};
       }
    }
    
    input {
            outline: none;
            background: ${props => props.theme['--base-input']};
            border: none;
            padding: 1.2rem;
            border-radius: 6px;
            color: ${props => props.theme['--base-text']};
            margin-bottom: 1.8rem;
       }

       div {
        display: flex;
        gap: 1.2rem;
       }
`

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

export const CloseOrder = styled.button``