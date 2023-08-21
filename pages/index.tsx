
import About from '@/components/AboutPage/About'
import Contact from '@/components/ContactPage/Contact'
import Navbar from '@/components/HomePage/Navbar'
import { Main } from '@/components/Main/Main'
import Project from '@/components/ProjectPage/Project'
import Skills from '@/components/SkillsPage/Skills'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>  Portfolio-Rownak Hayat </title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
        <Navbar/>
        <Main/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
    </div>
  )
}
