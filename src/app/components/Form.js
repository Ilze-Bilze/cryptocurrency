"use client"; // This is a client component 
import { useEffect, useRef } from 'react'
import currencies from "../utilities/currencies";

function Form() {
  const formRef = useRef()
  const fromSelectRef = useRef()
  const fromInputRef = useRef()
  const toSelectRef = useRef()
  const toElRef = useRef()

  const form = formRef.current
  const fromInput = fromInputRef.current
  const fromSelect = fromSelectRef.current
  const toSelect = toSelectRef.current
  const toEl = toElRef.current

  const endpoint = 'https://api.coinbase.com/v2/exchange-rates?currency';
  const ratesByBase = {};

  function generateOptions(options) {
    return Object.entries(options)
      .map(
        ([currencyCode, currencyName]) =>
          `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`,
      )
      .join('');
  }

  async function fetchRates(base = 'EUR') {
    const res = await fetch(`${endpoint}?base=${base}`);
    const rates = await res.json();
    return rates;
  }
  
  async function convert(amount, from, to) {
    // first check if we even have the rates to convert from that currency
    if (!ratesByBase[from]) {
      console.log(
        `Oh, nooo! We don't have ${from} to convert ${to}. So let's go get it!`,
      );
      const rates = await fetchRates(from);
      // store them for next time
      ratesByBase[from] = rates;
      // console.log(rates);
      const rate = ratesByBase[from].rates[to];
      const convertedAmount = rate * amount;
      console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
      return convertedAmount;
    }
    // Convert that amount that they past in
  }
  
  function formatCurrency(amount, currency) {
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  }
  
  async function handleInput(e) {
    const rawAmount = await convert(
      fromInput.value,
      fromSelect.value,
      toSelect.value,
    );
    toEl.textContent = formatCurrency(rawAmount, toSelect.value);
  }

  const optionsHTML = generateOptions(currencies);
  // On page load, populate the options
  // fromSelect.innerHTML = optionsHTML;
  // toSelect.innerHTML = optionsHTML;
  // form.addEventListener('input', handleInput);

  return (
    <form className="border" ref={formRef}>
      <input type="number" name="from_amount" ref={fromInputRef} />
      <select name="from_currency" ref={fromSelectRef}>
        <option>Select a Currency</option>
      </select>
      <p>in</p>
      <select name="to_currency" ref={toSelectRef}>
        <option>Select a Currency</option>
      </select>
      <p>is</p>
      <p className="to_amount" ref={toElRef}>$0</p>
    </form>
  )
}
export default Form