"use client"; // This is a client component 
import { createRoot } from 'react-dom/client';
import Loading from './loading';
import Header from "./components/Header";
import "./i18n";
import Intro from './components/Intro';
import { useTranslation } from 'react-i18next';
import Form from './components/Form';
import { Suspense } from 'react';
import ToggleRTL from './components/ToggleRTL'
import Image from 'next/image';
import adaIcon from './assets/cryptoicons/ada.svg'

export default function Home() {
  const { t } = useTranslation();
  var about = t('about', { returnObjects: true }) // Return the array from my local JSON file

  return (
    <>
    <Header />
    
    <main className="m-auto flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <ToggleRTL />
        <Image src={adaIcon} alt="svg icon" width="50" height="50" />
        <Intro title={t(about.header)} />
        <Suspense fallback={<Loading />}>
          <Form />
        </Suspense>
      </div>
    </main>
    </>
  );
}
