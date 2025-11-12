import Faq from "../components/Pneumatic/Faq";
import Advantages from "../components/Transair/Advantages";
import Banner from "../components/Transair/Banner";
import Features from "../components/Transair/Features";
import Operations from "../components/Transair/Operations";
import Piping from "../components/Transair/Piping";
import System from "../components/Transair/System";

const TransairPage = () => {
    return (
        <>
            <Banner />
            <Piping />
            <Features />
            <System />
            <Advantages />
            <Operations />
            <Faq />
        </>
    )
}

export default TransairPage;