import Banner from '../components/Hydraulics/Banner';
import Heading from '../components/Hydraulics/Heading';
import Features from '../components/Hydraulics/Features';
import Categories from '../components/Hydraulics/Categories';
import Advantages from '../components/Hydraulics/Advantages';
import Conclusion from '../components/Hydraulics/Conclusion';

function HydraulicsPage() {
    return (
        <>
            <Banner />
            <Heading />
            <Features />
            <Categories title="Hydraulics Categories" />
            <Advantages />
            <Conclusion />
        </>
    )
}

export default HydraulicsPage