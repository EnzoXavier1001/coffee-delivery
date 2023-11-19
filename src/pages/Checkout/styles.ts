import styled from "styled-components";

export const CheckoutContainer = styled.main`
   max-width: 112rem;
   margin: 4.0rem auto;

   display: flex;
   align-items: flex-start;
   gap: 3.2rem;

   @media (max-width: 1170px) {
    width: 90%;
   }
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



export const FormCheckout = styled.form`
    display: flex;
    align-items: flex-start;
    gap: 3.2rem;
    width: 100%;

    @media (max-width: 1170px) {
        flex-direction: column;
    }
`

export const CoffeeDisplay = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    h2 {
        color: ${props => props.theme['--base-subtitle']};
        font-size: 2.0rem;
        font-weight: 600;
    }

    @media (max-width: 1170px) {
        width: 100%;
    }
`


export const CloseOrder = styled.button`
    outline: 0;
    border: 0;
    width: 100%;
    margin-top: 2.4rem;
    font-size: 1.4rem;

    background: ${props => props.theme['--yellow-600']};
    color: ${props => props.theme.white};
    border-radius: 6px;
    padding: 1.2rem;
    text-transform: uppercase;
    transition: filter 0.3s;

    font-weight: 600;

    cursor: pointer;

    &:hover {
        filter: brightness(0.9);
    }

    &:disabled {
        opacity: 0.6;
    }
`

export const ButtonPayment = styled.label<{ $isPaymentActive: boolean }>`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    input[type="radio"] {
        width: 0;
        height: 0;
    }

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

    border: ${props => props.$isPaymentActive ? `1px ${props.theme['--purple-600']} solid` : `1px ${props.theme['--base-button']} solid`};

    background: ${props => props.$isPaymentActive ? props.theme['--purple-300'] : props.theme['--base-button']};

    transition: background 0.3s;

    &:hover {
        background: ${props => props.$isPaymentActive ? '' : props.theme['--base-hover']}
    }

`

export const CoffeeDisplayContainer = styled(BaseCardLayout)`
    border-radius: 6px 44px 6px 44px;
`

export const CoffeeDisplayList = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2.4rem;
`

export const CoffeeCard = styled.div`
    display: flex;
    width: 100%;
    gap: 2.0rem;

    img {
        height: 6.4rem;
    }
`

export const CardDivider = styled.div`
    width: 100%;

    background-color: ${props => props.theme['--base-button']};

    height: 1px;

    margin: 2.4rem 0;
`

export const ButtonsWrapper = styled.div`
    display: flex;

    gap: 0.8rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.9rem;
        background-color: ${props => props.theme['--base-button']};

        padding: 0.9rem;
        border-radius: 6px;

        button {
            border: 0;
            outline: none;
            background-color: transparent;
            cursor: pointer;
            color: ${props => props.theme['--base-title']};
        }
    }
`

export const CoffeeCardWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

    header {
        margin-bottom: 0.8rem;
        justify-content: space-between;

        h3 {
            font-size: 1.6rem;
        }

        span {
            color: ${props => props.theme['--base-text']};
            font-weight: 600;
        }
    }
`

export const CoffeeTotalAmount = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            color: ${props => props.theme['--base-text']};
        }

        span > strong {
            color: ${props => props.theme['--base-subtitle']};
            font-size: 2.0rem;
        }
    }
`

export const ButtonRemove = styled.button`
    cursor: pointer;
    background-color: ${props => props.theme['--base-button']};
    color: ${props => props.theme['--base-text']};

    border-radius: 6px;
    font-size: 1.4rem;
    padding: 0.65rem 0.8rem;
    outline: 0;
    border: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: filter 0.3s;

    &:hover {
        filter: brightness(0.8);
    }
`

export const EmptyList = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;

    img {
        width: 20rem;
    }
`