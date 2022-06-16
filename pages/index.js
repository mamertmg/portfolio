import Layout from '../components/layout/Layout'
import Hero from '../components/Hero'
import TechStack from '../components/TechStack'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <AboutMe/>
      <TechStack/>
    </Layout>
  )
}
