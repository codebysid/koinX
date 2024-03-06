export const formatCurrency = (amount, currencyCode) => {
  return Intl.NumberFormat(
    'en-us', {
    style: "currency",
    currency: currencyCode
  }
  ).format(amount)
}

export const usdToInr = (usd: number) => {
  const exchangeRate = 82.90
  return formatCurrency(usd * exchangeRate, "INR")
}
