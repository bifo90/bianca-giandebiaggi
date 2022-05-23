import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';
import Section from '../components/Section';
//import Portfolio from '../components/Portfolio'
import {useState, useEffect} from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer';
import data from '../data/data.js'

export default function Home() {
    const [width, setWidth] = useState(769)
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        
        window.innerWidth < width ? setIsMobile(true) : setIsMobile(false)
        window.addEventListener('resize', () => {
            window.innerWidth < width ? setIsMobile(true) : setIsMobile(false)
        })
    },[width])    
    return (
        <main>
            <Head>
                <title>Bianca Giandebiaggi</title>
                <meta name="description" content="Social Media Content, Translater and many more" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                {!isMobile ? (
                    <Navbar />
                    ) : (
                    <NavbarMobile />
                )}
                
                <Hero />
                <Section data={data} />
                {/* <Portfolio data={data_portfolio} /> */}
                <Contact />
                <Footer />
            </>
        </main>
    )
}
