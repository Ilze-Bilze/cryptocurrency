"use client"; // This is a client component 
import { useEffect, useRef, useState } from 'react'
import currencies from "../utilities/currencies"
import Input from './Input'
import Select from './Select'
import { generateOptions, formatCurrency } from '../utilities/utils.js'

async function fetchRates() {
  const res = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=EUR');
  const rates = await res.json();
  return rates;
}

async function convert(amount, from, to) {
  const ratesByBase = {};
  // first check if we even have the rates to convert from that currency
  if (!ratesByBase[from]) {
    console.log(
      `Oh, nooo! We don't have ${from} to convert ${to}. So let's go get it!`,
    );
    const rates = await fetchRates(from);
    // store them for next time
    ratesByBase[from] = rates;
    const rate = ratesByBase[from].rates[to];
    
    const convertedAmount = rate * amount;
    console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
    return convertedAmount;
  }
  // Convert that amount that they past in
}

async function handleInput(e) {
  // imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000))

  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value,
  );
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

function Form() {
  const formRef = useRef(null)
  const fromSelectRef = useRef(null)
  const fromInputRef = useRef(null)
  const toSelectRef = useRef(null)
  const toElRef = useRef(null)

  // fromInputRef.current?.focus();

    const form = formRef.current
    const fromSelect = fromSelectRef.current
    const toEl = toElRef.current
    

      // when the page loads, this code runs!
      const optionsHTML = generateOptions(currencies);
      console.log(optionsHTML) // WORKING THIS FAR!


      
      console.log(fromInputRef)
      // populate the options elements
      fromInputRef.innerHTML = optionsHTML;
      toSelectRef.innerHTML = optionsHTML;
      // form.addEventListener('input', handleInput);

  return (
    <form className="border" ref={formRef}>
      <input type="number" name="from_amount" ref={fromInputRef} />
      <Input ref={fromInputRef} />
      
      <Select ref={fromSelectRef} text="text" />
      <p>in</p>
      
      <Select ref={toSelectRef} text="text" />
      <p>is</p>
      <p className="to_amount" ref={toElRef}>$0</p>
    </form>
  )
}

export default Form