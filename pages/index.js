import Layout from '../components/layout/Layout'
import Hero from '../components/Hero'
import TechStack from '../components/TechStack'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <AboutMe/>
      <TechStack/>
      <Contact/>
    </Layout>
  )
}
