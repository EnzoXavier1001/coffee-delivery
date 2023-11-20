import styled from "styled-components";
import { BaseCardLayout } from "../../styles";

export const FormWrapper = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h2 {
        color: ${props => props.theme['--base-subtitle']};
        font-size: 2.0rem;
        font-weight: 600;
    }

    @media (max-width: 1170px) {
        flex: 1;
        width: 100%;
    }
`

export const FormCheckoutStyles = styled(BaseCardLayout)`
    display: flex;
    flex-direction: column;
    width: 100%;

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

export const FormGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    
    input {
        flex: 1;
    }
`

export const FormPayment = styled(BaseCardLayout)`
    width: 100%;
`


export const ButtonWrapper = styled.div`
    display: flex;
    gap: 1.2rem;
    
    @media (max-width: 555px) {
        flex-direction: column;
    }
`

export const FormInputComplement = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
        width: 100%;
    }

    label {
        position: absolute;
        right: 4%;
        font-style: italic;
        margin-bottom: 1.8rem;
        font-size: 1.2rem;
        color: ${props => props.theme['--base-label']};
    }
`