const ratesByBase = {};

async function fetchRates() {
  // imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  const res = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=EUR');
  return res.json();
}

export async function convert(amount, from, to) {
  // first check if we even have the rates to convert from that currency
  if (!ratesByBase[from]) {
    console.log(
      `Oh no, we dont have ${from} to convert to ${to}. So gets go get it!`,
    );
    const rates = await fetchRates(from);
    // store them for next time
    ratesByBase[from] = rates;
  }
  // convert that amount that they passed it
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}