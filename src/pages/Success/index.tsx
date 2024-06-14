import { useEffect, useState } from "react";
import { ContentWrapper, SuccessContainer, SuccessDescription, SuccessIcon, SuccessInfo, SuccessTitle, SucessInfoGroup } from "./styles";
import successImg from '../../assets/success.png'
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export interface OrderInfo {
    address: {
        cep: string
        street: string
        number: number
        complement: string
        district: string
        city: string
        uf: string
    }
    formPayment: string
}

export function Success() {
    const [orderInfo, setOrderInfo] = useState<OrderInfo>()
    const navigate = useNavigate()

    useEffect(() => {
        const orderInfoStored = JSON.parse(localStorage.getItem('@CoffeeDelivery:order')!)

        if(orderInfoStored) {
            setOrderInfo(orderInfoStored)
        } else {
            navigate('/')
        }
        
    }, [])

    return (
        <SuccessContainer>
            <SuccessTitle>
                Uhu! Pedido confirmado
            </SuccessTitle>
            <SuccessDescription>
                Agora é só aguardar que logo o café chegará até você
            </SuccessDescription>
            <SuccessInfo>
                <SucessInfoGroup>
                    <div>
                        <SuccessIcon $background="#8047F8">
                            <MapPin size={20} color="#fff" weight="fill" />
                        </SuccessIcon>
                        <address>Entrega em <strong>{`${orderInfo?.address?.street}, ${orderInfo?.address?.number}`}</strong> <br /> {`${orderInfo?.address?.district} - ${orderInfo?.address?.city}, ${orderInfo?.address?.uf.toUpperCase()}`}</address>
                    </div>
                    <div>
                        <SuccessIcon $background="#DBAC2C">
                            <Timer size={20} color="#fff" weight="fill" />
                        </SuccessIcon>
                        <ContentWrapper>
                            <span>Previsão de Entrega</span>
                            <span><strong>20 min - 30 min</strong></span>
                        </ContentWrapper>
                    </div>
                    <div>
                        <SuccessIcon $background="#C47F17">
                            <CurrencyDollar size={20} color="#fff" weight="fill" />
                        </SuccessIcon>
                        <ContentWrapper>
                            <span>Pagamento na Entrega</span>
                            <span><strong>{orderInfo?.formPayment}</strong></span>
                        </ContentWrapper>
                    </div>
                </SucessInfoGroup>
                <img src={successImg} alt="Imagem de sucesso" />
            </SuccessInfo>
        </SuccessContainer>
    )
}