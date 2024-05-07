"use client"; // This is a client component 
import { createRoot } from 'react-dom/client';
import Loading from './loading';
import Header from "./components/Header";
import "./i18n";
import Intro from './components/Intro';
import { useTranslation } from 'react-i18next';
import Form from './components/Form';
import { Suspense } from 'react';
import variables from './variables.module.scss'

export default function Home() {
  const { t } = useTranslation();
  var about = t('about', { returnObjects: true }) // Return the array from my local JSON file

  return (
    <>
    <Header />
    <main className="m-auto flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <Intro title={t(about.header)} />
        <div className="">
          <Suspense fallback={<Loading />}>
            <Form />
          </Suspense>
        </div>
      </div>
    </main>
    </>
  );
}
