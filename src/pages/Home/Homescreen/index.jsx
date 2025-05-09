import HeroSection from "../HeroSection"
import MySkills from "../Myskills"
import AboutMe from "../AboutMe"
import Testimonial from "../Testimonial"
import ContactMe from "../ContactMe"
import MyPortfolio from "../Myportifolio"
import Footer from "../Footer"

export default function Home () {
    return(
        <>
        <HeroSection />
        <MySkills />
        <AboutMe />
        <MyPortfolio/>
        <Testimonial/>
        <ContactMe />
        <Footer />
        </>
    )

}

