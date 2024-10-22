import Hero from '../components/Hero.jsx'
import Faqs from '../components/Faqs.jsx'
import Team from '../components/Team.jsx'
import About from '../components/About.jsx'
import Footer from '../components/Footer.jsx'
import Contact from '../components/Contact.jsx'
import Waitlist from '../components/Waitlist.jsx'
import Backtotop from '../components/Backtotop.jsx'
import MainNavbar from '../components/MainNavbar.jsx'
import BlogCollection from '../components/BlogCollection.jsx'

export default function Landing() {
    window.document.title = 'Wink - The Ultimate Tasks Marketplace'
    return(
        <>
            <MainNavbar />
            <Hero />
            <About />
            <Team />
            <Faqs />
            <Waitlist />
            <BlogCollection />
            <Contact />
            <Footer />
            <Backtotop />
        </>
    )
}