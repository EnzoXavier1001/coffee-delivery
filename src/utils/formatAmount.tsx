export function formatAmount(price: number) {
    return price.toFixed(2).replace('.', ',')
}