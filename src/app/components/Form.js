"use client"; // This is a client component 
import { useEffect, useRef, useState } from 'react'
import currencies from "../utilities/currencies"
import Input from './Input'
import Select from './Select'
import { generateOptions, formatCurrency } from '../utilities/utils.js'
import { convert } from '../utilities/convert'



function Form() {
  const formRef = useRef(null)
  const fromSelectRef = useRef(null)
  const fromInputRef = useRef(null)
  const toSelectRef = useRef(null)
  const toElRef = useRef(null)

  // fromInputRef.current?.focus();

    const form = formRef.current
    const fromSelect = fromSelectRef.current
    console.log(fromSelect)
    const toSelect = toSelectRef.current
    console.log(fromSelect)
    const toEl = toElRef.current
    
    async function handleInput(e) {
      // imitate delay
      await new Promise(resolve => setTimeout(resolve, 3000))
    
      const rawAmount = await convert(
        fromInputRef.value,
        fromSelect.value,
        toSelect.value,
      );
      toEl.textContent = formatCurrency(rawAmount, toSelect.value);
    }
      // when the page loads, this code runs!
      const optionsHTML = generateOptions(currencies);
      console.log(optionsHTML)

      if (fromSelect != null) {
        fromSelect.innerHTML = optionsHTML;
      }
      // populate the options elements
      // fromSelectRef.current.innerHTML = optionsHTML;
      // crossOriginIsolated.log(fromSelectRef.current.innerHTML)
      
      if (toSelect != null) {
        toSelect.innerHTML = optionsHTML;
      }
      // toSelectRef.current.innerHTML = optionsHTML;
      console.log(toSelect)
      //form.addEventListener('input', handleInput);

  return (
    <form className="border" ref={formRef}>
      <input type="number" name="from_amount" ref={fromInputRef} />
      
   
      <select name="from_currency" ref={fromSelectRef.current}>
      <option>Select a Currency</option>
    </select>
      <p>in</p>
      

      <select name="to_currency" ref={toSelectRef.current}>
      <option>Select a Currency</option>
    </select>
      <p>is</p>
      <p className="to_amount" ref={toElRef}>$0</p>
    </form>
  )
}

export default Form