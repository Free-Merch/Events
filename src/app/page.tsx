import Image from 'next/image'
import AboutEvent from './components/AboutEvent'
import Header from './components/Header'
import Speakers from './components/Speakers'
import Sponsors from './components/Sponsors'

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header/>
      <AboutEvent/>
      <Speakers/>
      <Sponsors/>
      
    </main>
  )
}
