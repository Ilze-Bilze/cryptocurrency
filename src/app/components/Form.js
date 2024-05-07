"use client"; // This is a client component 
import { useEffect, useRef, useState } from 'react'
import currencies from "../utilities/currencies"
import Input from './Input'
import Select from './Select'
import { generateOptions, formatCurrency } from '../utilities/utils.js'
import { convert } from '../utilities/convert'

function Form() {
  const fromSelectRef = useRef(null)
  const fromInputRef = useRef(null)
  const toSelectRef = useRef(null)
  const toElRef = useRef(null)
  
  const fromSelect = fromSelectRef.current
  const fromInput = fromInputRef.current
  const toSelect = toSelectRef.current
  const toEl = toElRef.current

  const handleInput = async (e) => {
    const rawAmount = await convert(
      fromInputRef.current.value,
      fromSelect.value,
      toSelect.value,
    );
    toEl.textContent = formatCurrency(rawAmount, toSelect.value);
  }
// setText(text.toLowerCase())
  // when the page loads, this code runs!
  const optionsHTML = generateOptions(currencies)
  // console.log(currencies)
  // console.log(optionsHTML)
  if (fromSelect != null) {
    fromSelect.innerHTML = optionsHTML;
  }
  if (toSelect != null) {
    toSelect.innerHTML = optionsHTML;
  }

  return (
    <form className="border" onInput={handleInput}>
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