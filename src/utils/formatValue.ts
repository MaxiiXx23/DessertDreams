export function formatValue(value: number): string {
  const priceString = String(value)
  const [, decimals] = priceString.split('.')
  const priceFormatted = priceString.replace('.', ',')

  if (decimals.length === 1) {
    const price = priceFormatted + '0'
    return price
  } else {
    return priceFormatted
  }
}
