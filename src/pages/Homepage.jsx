import AboutUs from "../components/Homepage/AboutUs";
import Clients from "../components/Homepage/Clients";
import Connected from "../components/Homepage/Connected";
import Industries from "../components/Homepage/Industries";
import Manufacturing from "../components/Homepage/Manufacturing";
import Products from "../components/Homepage/Product";
import Recognized from "../components/Homepage/Recognized";
import Story from "../components/Homepage/Story";
import TopBanner from "../components/Homepage/TopBanner";

const Homepage = () => {
    return (
        <>
            <TopBanner />
            <Products />
            <AboutUs />
            <Manufacturing />
            <Recognized />
            <Industries />
            <Story />
            <Clients />
            <Connected />
        </>
    );
};

export default Homepage;