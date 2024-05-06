"use client"; // This is a client component 
import React from "react";
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import EnFlag from '../assets/en.png';
import FrFlag from '../assets/fr.png';
import EsFlag from '../assets/es.png';
import DeFlag from '../assets/de.png';
import Image from 'next/image';

const Items = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 60px;
  list-style: none;
`;
const Item = styled.li`
  position: relative;
  margin: auto auto;
  width: 100%;
  height: auto;
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;
  line-height: 80px;
  span {
    position: relative;
  }
  > ul {
    display: none;
    position: absolute;
    top: 38px;
    left: 0;
    width: 100%;
    background-color: white;
    transition: all 1s ease-out;
    padding-left: 5px;
    padding-right: 5px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      border-color: transparent;
      border-bottom: 2px;
      margin-top: 5px;
      margin-bottom: 5px;
      button {
        &:hover {
          opacity: 0.6;
          transition: all 0.3s ease-out;
        }
      }
    }
  }
  &:hover {
    border-color: #09bef0;
    > ul {
      transition: all 1s ease-out;
      display: block;
      text-align: center;
    }
  }
`;

const locales = {
  en: {flag: EnFlag, title: "English"},
  fr: {flag: FrFlag, title: "French"},
  es: {flag: EsFlag, title: "Spanish"},
  de: {flag: DeFlag, title: "German"}
};

function Flags() {
  const { i18n } = useTranslation();
  const currLangFlag = (i18n.resolvedLanguage);
  
  return (
    <div className="flex flex-row items-center justify-center w-[60px]">
      <Items>
        <Item>
          {Object.keys(locales).map((locale, key) => (
            <span key={key}>
              {currLangFlag === locale ? 
                <Image src={locales[locale].flag} width="38" height="38" alt={locales[locale].title} /> : " "
              }
            </span>
          ))} 
          <ul>
            {Object.keys(locales).map((locale, key) => (
              <li key={key}>
                <button type="submit" onClick={() => i18n.changeLanguage(locale)}>
                  <Image src={locales[locale].flag} width="38" height="38" alt={locales[locale].title} />
                </button>
              </li>
            ))}
          </ul>
        </Item>
      </Items>
    </div>
  );
};

export default Flags;