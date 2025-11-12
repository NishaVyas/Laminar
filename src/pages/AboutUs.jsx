import AboutSection from "../components/AboutUs/Banner";
import Clients from "../components/AboutUs/Clients";
import OurMission from "../components/AboutUs/OurMission";
import OurStory from "../components/AboutUs/OurStory";
import OurVision from "../components/AboutUs/OurVision";
import Step from "../components/AboutUs/Step";

function AboutUs() {
    return (
        <>
            <AboutSection />
            <Step />
            <OurStory />
            <OurVision />
            <OurMission />
            <Clients />
        </>
    )
}

export default AboutUs;