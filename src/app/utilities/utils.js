export const generateOptions = (options) => {
  return Object.entries(options).map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    ).join('');
}

export const formatCurrency = (amount, currency) => {
  console.log(currency.toLowerCase())
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}
