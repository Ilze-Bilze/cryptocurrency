"use client"; // This is a client component 
import { createRoot } from 'react-dom/client';
import Image from "next/image";
import Header from "./components/Header";
import "./i18n";
import Intro from './components/Intro';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  var about = t('about', { returnObjects: true }) // Return the array from my local JSON file

  return (
    <>
    <Header />
    <main className="m-auto flex min-h-screen flex-col items-center justify-between p-24">
    
      <div className="w-full">
        <Intro title={t(about.header)} />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          
        </div>
      </div>
    </main>
    </>
  );
}
