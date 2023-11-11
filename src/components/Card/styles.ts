import styled from "styled-components";

export const CardContainer = styled.div`
    background: ${props => props.theme['--base-card']};

`

export const CardTitle = styled.h3``

export const CardDescription = styled.p`

`

export const TagContainer = styled.div`
    display: flex;
    gap: 0.4rem;
`

export const CardTags = styled.span`
    display: inline-block;
    background: ${props => props.theme['--yellow-300']};
    color: ${props => props.theme['--yellow-900']};
    font-weight: 700;
    text-transform: uppercase;

    margin: 1.6rem 0 2.0rem;
    padding: 0.6rem 1.0rem;
    font-size: 1.4rem;
    border-radius: 12px;
`

export const CardFooter = styled.footer`

`