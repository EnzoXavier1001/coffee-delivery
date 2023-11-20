import styled from "styled-components";

export const CoffeeListContainer = styled.section`
    max-width: 150rem;
    margin: 3.2rem auto;
 
    @media (max-width: 1550px) {
        width: 90%;
    }
`

export const CoffeeListTitle = styled.h2`
    font-size: 3.2rem;

    color: ${props => props.theme['--base-subtitle']};
    font-weight: 800;

    margin-bottom: 5.4rem;

    @media (max-width: 1170px) {
        text-align: center;
    }
`

export const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    gap: 4rem 3.2rem;
`