import Hero from '../components/Hero.jsx'
import Waitlist from '../components/Waitlist.jsx'
import Contact from '../components/Contact.jsx'
import MainNavbar from '../components/MainNavbar.jsx'

export default function Landing() {
    window.document.title = 'SendMe - The Ultimate Tasks Marketplace'
    return(
        <>
            <MainNavbar />
            <Hero />
            <Waitlist />
            <Contact />
        </>
    )
}