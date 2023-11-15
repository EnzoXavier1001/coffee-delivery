export function formatAmount(amount: number) {
<<<<<<< HEAD
    return  amount.toFixed(2).replace('.', ',')
=======
    return  amount.toLocaleString('pt-br')
>>>>>>> 8fd36ad542171da0563c160290ff7e200de1dd2d
}