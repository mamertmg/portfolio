import Layout from '../components/layout/Layout'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import AboutMe from "../components/AboutMe";
import Business from "../components/Business";
import Contact from "../components/Contact";
import Polymers from "../components/Polymers";
import Projects from "../components/Projects";
import TechStack from '../components/TechStack'

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <Intro/>
      <AboutMe/>
      <Business/>
      <Polymers/>
      <Projects/>
      <TechStack/>
      <Contact/>
    </Layout>
  )
}
