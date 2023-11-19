import styled from "styled-components";

export const HomeContainer = styled.main`
    background: url('https://raw.githubusercontent.com/EnzoXavier1001/coffee-delivery/main/src/assets/background.png');
    background-size: cover;

    padding: 9.4rem 0 10.8rem;

    @media (max-width: 768px) {
        padding: 1.8rem 0;
    }
`

export const HomeSection = styled.section`
    max-width: 112rem;
    margin: 0 auto;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 1170px) {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`

export const HomeContent = styled.div`

    h1 {
        font-size: 4.8rem;
        font-family: 'Baloo 2', sans-serif;
        line-height: 130%;

        color: ${props => props.theme['--base-title']};
        font-weight: 800;

        margin-bottom: 1.6rem;
    }

    p {
        margin-bottom: 6.6rem;
        color: ${props => props.theme['--base-subtitle']};
        font-size: 2.0rem;
    }

    @media (max-width: 1170px) {
        order: 2;
        text-align: center;

        h1 {
            font-size: 2.4rem;
        }
    }
`

export const ListBenefits = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.0rem;
    list-style: none;

    li {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        color: ${props => props.theme['--base-text']};
    }

    @media (max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 326px) {
        li {
            gap: 0.6rem;
        }
    }
`

export const IconWrapper = styled.span<{ $background: string; }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.$background};
    width: 3.2rem;
    height: 3.2rem;

    padding: 0.8rem;

    border-radius: 50%;
`