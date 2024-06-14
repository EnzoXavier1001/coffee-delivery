import { ArrowCircleUp } from "@phosphor-icons/react";
import { FooterContainer } from "./styles";

export function Footer() {
    return (
        <FooterContainer>
            <a href="#header" title="Ir para o topo da página">
                <ArrowCircleUp size={50} color="#4B2995" weight="fill" />
            </a>
        </FooterContainer>
    )
}