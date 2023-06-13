import Image from 'next/image'
import AboutEvent from './components/AboutEvent'
import Countdown from './components/Countdown2'
import Faq from './components/Faq'
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import ISlider from './components/ISlider'
import PastEvent from './components/PastEvent'
import Rights from './components/Rights'
import Speak from './components/Speak'
import Speakers from './components/Speakers'
import Sponsors from './components/Sponsors'

const images = [
  '/Rectangle 5.png',
  '/Rectangle 6.png',
  '/Rectangle 7.png',
  '/Rectangle 8.png',
  
  // Add more image paths here
];

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <AboutEvent />
      <Sponsors />
      <Speakers />
      <PastEvent />
      <Speak />
      <Faq />
      <Rights />
      {/* <Countdown/> */}
      
    </main>
  )
}
