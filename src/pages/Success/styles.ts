import styled from "styled-components";


export const SuccessContainer = styled.div`
    max-width: 112rem;
    padding-top: 8.0rem;
    margin: 0 auto;

    @media (max-width: 1200px) {
        width: 90%;
    }
`

export const SuccessTitle = styled.h1`
    font-family: 'Baloo 2';
    color: ${props => props.theme['--yellow-900']};
    margin-bottom: 0.4rem;

    @media (max-width: 1200px) {
        text-align: center;
    }
`

export const SuccessDescription = styled.p`
    color: ${props => props.theme['--base-subtitle']};
    font-size: 2.0rem;
    margin-bottom: 4.0rem;

    @media (max-width: 1200px) {
        text-align: center;
    }
`

export const SuccessInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1200px) {
        flex-direction: column;
        gap: 1.2rem;
    }
`

export const SucessInfoGroup = styled.div`
    display: flex;
    flex: 2;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 3.2rem;
    border: 1px solid red;
    padding: 4.0rem;

    div {
        display: flex;
        align-items: flex-start;
        row-gap: 0.2rem;
        column-gap: 2.0rem;
    }

    @media (max-width: 1200px) {
        order: 2;
    }

`

export const SuccessIcon = styled.div<{ $background: string}>`
    background: ${props => props.$background};
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.8rem;
    border-radius: 100%;

`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`