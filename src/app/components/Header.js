"use client"; // This is a client component 
import { useState, useEffect } from 'react';
import Flags from './Flags';

function Header() {
  const [ open, setOpen ] = useState(false)
  const [scroll, setScroll] = useState(false)
  
  useEffect(() => {
    // Sticky header
    window.addEventListener("scroll",  () => {
      setScroll(window.scrollY > 50)
    })

    // monitor the state of the toggle
    // add/remove click event handler to the document
    const clickHandler = ({ target }) => {
      const container = document.getElementById("container-nav")
      if (container.contains(target)) return
      setOpen(false)
    }
    document.addEventListener("click", clickHandler)
    // these functions clean up the event listeners
    return () => document.removeEventListener("click", clickHandler)
  }, [])

  // same but for keypresses
  // if the esc key is pressed close the toggles
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setOpen(false)
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  }, [])

  return (
    <>
      <header className="w-screen top-0 border" style={{ background: scroll ? "#fff" : "", zIndex: "999", padding: scroll ? "10px 0 10px 0" : "20px 0 20px 0", position: scroll ? "fixed" : "absolute" }}>
        <div className="relative flex flex-row justify-between item-center container border m-auto">
          {/* Logo */}
          <a className="text-[22px] font-bold text-white hover:text-main" href="/">
          <span className="text-[#C2D6C1]">Crypto</span>Currency</a>
          <div className="relative flex flex-row justify-between gap-x-5 border" id="container-nav">
            <Flags />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header