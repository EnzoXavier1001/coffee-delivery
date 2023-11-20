import styled from 'styled-components'

export const HeaderContainer = styled.div`
    padding: 3.2rem 0;
    max-width: 150rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 1.2rem;

        a {
            display: flex;
            align-items: center;
            background: ${props => props.theme['--yellow-300']};
            padding: 1.0rem;
            border-radius: 6px;
            transition: filter 0.1s linear;
            position: relative;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }

    @media (max-width: 1550px) {
        width: 90%;
    }

    @media (max-width: 320px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.8rem;
    }
`

export const CurrentLocation = styled.div`
    display: flex;
    align-items: center;

    background: ${props => props.theme['--purple-300']};

    padding: 1.0rem 0.8rem;
    border-radius: 6px;

    gap: 0.4rem;

    span {
        color: ${props => props.theme['--purple-900']};
    }
`

export const CartCounter = styled.div`
    position: absolute;
    top: -22%;
    right: -22%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.2rem;

    color: ${props => props.theme.white};
    font-weight: 700;

    width: 2.0rem;
    height: 2.0rem;

    background: ${props => props.theme['--yellow-900']};
    border-radius: 50%;
`