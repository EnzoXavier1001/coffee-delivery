import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { OrderInfo } from "../pages/Success"
import { formatAmount } from "../utils/formatAmount"
import * as zod from 'zod'

const CheckoutFormValidationSchema = zod.object({
    cep: zod.string().min(8).max(9),
    street: zod.string().min(1),
    number: zod.number(),
    complement: zod.string(),
    district: zod.string(),
    city: zod.string(),
    uf: zod.string(),
    formPayment: zod.string()
})

type CheckoutFormData = zod.infer<typeof CheckoutFormValidationSchema>


export function useCheckout () {
    const navigate = useNavigate()
    const { cart, handleAddCartQuantity, handleDeleteCoffee, handleRemoveCartQuantity} = useContext(CartContext)
    const newUserInfo = useForm<CheckoutFormData>({
        resolver: zodResolver(CheckoutFormValidationSchema),
        defaultValues: {
            cep: '',
            street: '',
            complement: '',
            number: 0,
            district: '',
            city: '',
            uf: '',
            formPayment: 'Cartão de Crédito'
        }
    })
    const { handleSubmit, reset, watch } = newUserInfo

    const formValues = watch(["city", "street", "district", "city", "uf"])

    const isFormValid = formValues.every((value) => !!value);

    const canSubmit = isFormValid && cart.length > 0 ? false : true

    const totalCart: number = cart.reduce((prevCart, cartItem) => {
        const itemTotal = cartItem.price * cartItem.quantity!;
        return prevCart + itemTotal;
    }, 0);

    const totalCartWithDelivery = totalCart + 3.50

    const totalCartHasFreeShipping = totalCartWithDelivery > 100 ? 'Entrega Grátis' : `R$ ${formatAmount(3.50)}`

    const showAmountTotalCart = totalCartWithDelivery > 100 ? formatAmount(totalCart) : formatAmount(totalCartWithDelivery)

    function handleCreateOrder(data: CheckoutFormData) {
        const { cep, city, complement, district, number, street, uf, formPayment } = data 
        const newOrder: OrderInfo = {
            address: {
                cep, 
                city, 
                complement, 
                district, 
                number, 
                street, 
                uf
            },
            formPayment
        }
        localStorage.setItem('@CoffeeDelivery:order', JSON.stringify(newOrder))
        reset()
        navigate("/checkout/success")
    }
    return {
        handleAddCartQuantity, 
        handleDeleteCoffee, 
        handleRemoveCartQuantity,
        handleCreateOrder,
        totalCartHasFreeShipping,
        showAmountTotalCart,
        canSubmit,
        handleSubmit,
        newUserInfo,
        cart,
        totalCart
    }
}