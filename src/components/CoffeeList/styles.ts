import styled from "styled-components";

export const CoffeeListContainer = styled.section`
    max-width: 112rem;
    margin: 0 auto;
    margin-top: 3.2rem;
`

export const CoffeeListTitle = styled.h2`
    font-size: 3.2rem;

    color: ${props => props.theme['--base-subtitle']};
    font-weight: 800;

    margin-bottom: 5.4rem;
`

export const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3.2rem;
`