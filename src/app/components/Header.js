"use client"; // This is a client component 
import { useState, useEffect } from 'react';
import Flags from './Flags';

function Header() {
  const [scroll, setScroll] = useState(false)
  
  useEffect(() => {
    // Sticky header
    window.addEventListener("scroll",  () => {
      setScroll(window.scrollY > 50)
    })
  }, [])

  return (
    <>
      <header className="w-screen top-0" style={{ background: scroll ? "#fff" : "", zIndex: "999", padding: scroll ? "10px 0 10px 0" : "20px 0 20px 0", position: scroll ? "fixed" : "absolute" }}>
        <div className="relative flex flex-row justify-between item-center container m-auto">
          {/* Logo */}
          <a className="text-[22px] font-bold text-black hover:text-main" href="/">
          <span className="text-[#C2D6C1]">Crypto</span>Currency</a>
          <div className="relative flex flex-row justify-between gap-x-5">
            <Flags />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header