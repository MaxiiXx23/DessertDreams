export function formatValue(value: number): string {
  const priceString = String(value)
  const [, decimals] = priceString.split('.')

  if (decimals.length === 1) {
    const priceFormatted = priceString.replace('.', ',')
    const price = priceFormatted + '0'
    return price
  } else {
    const price = value.toFixed(2)
    const priceFormatted = price.replace('.', ',')
    return priceFormatted
  }
}
