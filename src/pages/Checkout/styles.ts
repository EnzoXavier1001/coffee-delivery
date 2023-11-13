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

    header {
       display: flex;
       gap: 0.8rem;
       align-items: center;
       margin-bottom: 3.2rem;

       h3 {
            color: ${props => props.theme['--base-subtitle']};
            margin-bottom: 0.2rem;
            font-weight: 400;
       }

       p {
            color: ${props => props.theme['--base-text']};
       }
    }
`

export const FormCheckoutStyles = styled(BaseCardLayout)`
    display: flex;
    flex-direction: column;

    input {
        outline: none;
        background: ${props => props.theme['--base-input']};
        border: none;
        padding: 1.2rem;
        border-radius: 6px;
        color: ${props => props.theme['--base-text']};
        margin-bottom: 1.8rem;
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

export const FormGroup = styled.div`
    display: flex;
    gap: 1.2rem;
    
    input {
        flex: 1;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 1.2rem;
`

export const ButtonPayment = styled.button`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    cursor: pointer;
    border: 0;
    outline: none;
    text-transform: uppercase;
    font-size: 1.3rem;

    color: ${props => props.theme['--base-text']};
    font-weight: 500;

    flex: 1;
    padding: 1.6rem;
    border-radius: 6px;

    background: ${props => props.theme['--base-button']};

    transition: background 0.3s;

    &:hover {
        background: ${props => props.theme['--base-hover']}
    }

    
`