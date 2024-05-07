"use client"; // This is a client component 
import { createContext, useContext, useState, useEffect } from "react"

const LayoutDirectionContext = createContext();

export const useLayoutDirection = () => {
  return useContext(LayoutDirectionContext);
};

export const LayoutDirectionProvider = ({ children }) => {
  const [isRTL, setIsRTL] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      const storedIsRTL = localStorage.getItem("isRTL")
      return storedIsRTL === "true"
    } else {
      console.log('Web Storage is not supported in this environment.')
    }
  });

  const toggleLayoutDirection = (boolean) => {
    setIsRTL(boolean);
  };

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("isRTL", isRTL.toString())
    } else {
      console.log('Web Storage is not supported in this environment.')
    }
  }, [isRTL]);

  useEffect(() => {
    // After the language direction changes, update the root HTML element
    const rootHtml = document.getElementById("root-html");
    if (rootHtml) {
      rootHtml.setAttribute("dir", isRTL ? "rtl" : "ltr");
    }
  }, [isRTL]);

  return (
    <LayoutDirectionContext.Provider value={{ isRTL, toggleLayoutDirection }}>
      {children}
    </LayoutDirectionContext.Provider>
  );
};