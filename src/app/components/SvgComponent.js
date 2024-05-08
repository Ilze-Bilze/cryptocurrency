import Image from 'next/image'
import eurIcon from '../assets/cryptoicons/eur.svg'
import { formatCurrency } from '../utilities/utils'

function SVG() {
  // const imgName = currency.toLowerCase()
  const imgSrc = '../assets/cryptoicons/eur.svg'
  console.log(imgSrc)
  return (
    <Image src={eurIcon} width={40} height={40} alt="Currency icons" />
  )
}

export default SVG