import {Navbar, Hero, Footer, AboutMe, Business, Industries, Polymers, Projects, TechStack, Contact} from '../components'

export default function Home() {
  return (
    <main className='bg-bg'>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Business/>
      <Industries/>
      <Polymers/>
      <Projects/>
      <TechStack/>
      <Contact/>
      <Footer/>
    </main>
  )
}
