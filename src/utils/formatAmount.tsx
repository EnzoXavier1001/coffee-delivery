export function formatAmount(amount: number) {
    return  amount.toFixed(2).replace('.', ',')
}