import styled from 'styled-components'

export const HeaderContainer = styled.header`
    padding: 3.2rem 0;
    position: absolute;
    width: 100%;
`

export const HeaderWrapper = styled.div`
    max-width: 112rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        a {
            background: ${(props) => props.theme['--yellow-300']};
            padding: 1.0rem;
            border-radius: 6px;
        }
    }
`
