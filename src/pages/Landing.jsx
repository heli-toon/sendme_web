import Hero from '../components/Hero.jsx'
import Faqs from '../components/Faqs.jsx'
import Footer from '../components/Footer.jsx'
import Contact from '../components/Contact.jsx'
import Waitlist from '../components/Waitlist.jsx'
import Backtotop from '../components/Backtotop.jsx'
import MainNavbar from '../components/MainNavbar.jsx'

export default function Landing() {
    window.document.title = 'SendMe - The Ultimate Tasks Marketplace'
    return(
        <>
            <MainNavbar />
            <Hero />
            <Waitlist />
            <Faqs />
            <Contact />
            <Footer />
            <Backtotop />
        </>
    )
}