"use client"; // This is a client component 
import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Paragraphs from './Paragraphs'
import { useTranslation } from 'react-i18next';

function Intro(props) {
  const { t } = useTranslation();
  var about = t('about', { returnObjects: true }) // Return the array from my local JSON file
  const { title } = props
  const titleRef = useRef()

  useEffect(() => {
    const titleString = titleRef.current
    const textContent = titleString.textContent.split(' ')
    const lastWords = textContent.splice(textContent.length - 3).join(' ')
    const updatedContent = (textContent.length > 0 ? ` <span class='green-words'>${lastWords}</span>` : lastWords)
    titleString.innerHTML = textContent.join(' ') + updatedContent
  }, [])

  return (
    <>
      <h1 ref={titleRef} className="mb-10 w-full">{title}</h1>
      <div className="flex w-full justify-between gap-x-14 mb-5">
      {/* Line */}
        <div className="relative flex justify-center items-center w-[36%] md:flex hidden">
          <span className="bg-main w-full h-[1px]"></span>
        </div>
      {/* Text paragrahs */}
        <div className="relative w-full md:w-[64%] text-[20px] leading-relaxed">
          <Paragraphs text={t(about.para)} />
        </div>
      </div>
    </>   
  )
}

Intro.propTypes = {
  title: PropTypes.string.isRequired
}

export default Intro