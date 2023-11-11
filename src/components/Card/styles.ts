import styled from "styled-components";

export const CardContainer = styled.div`
    background: ${props => props.theme['--base-card']};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-radius: 8px 36px 6px 36px;

    padding: 2.0rem;

    img {
        margin-top: -4.0rem;
    }
`

export const CardTitle = styled.h3`
    margin-bottom: 0.8rem;
    font-size: 2.0rem;

    color: ${props => props.theme['--base-subtitle']};
    font-weight: 600;
    font-family: 'Baloo 2', sans-serif;
`

export const CardDescription = styled.p`
    color: ${props => props.theme['--base-label']};

    font-size: 1.4rem;

    margin-bottom: 3.3rem;
`

export const TagContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.4rem;
    flex-wrap: wrap;
    margin: 1.2rem 0 1.6rem;
`

export const CardTags = styled.span`
    display: inline-block;
    background: ${props => props.theme['--yellow-300']};
    color: ${props => props.theme['--yellow-900']};
    font-weight: 700;
    text-transform: uppercase;

    padding: 0.6rem 1.0rem;
    font-size: 1.4rem;
    border-radius: 12px;
`

export const CardFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const CardAmount = styled.span`
    color: ${props => props.theme['--base-text']};
    font-size: 2.4rem;
    font-weight: 600;

    small {
        font-size: 1.4rem;
        font-weight: 400;
    }
`