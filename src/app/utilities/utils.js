export function generateOptions(options) {
  return Object.entries(options).map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    ).join('');
}

export function formatCurrency(amount, currency) {
  console.log(currency.toLowerCase())
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}
