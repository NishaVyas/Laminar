import Banner from '../components/Project/Banner'
import Customers from '../components/Project/Customers'
import Heading from '../components/Project/Heading'
import Highlights from '../components/Project/Highlights'
import Services from '../components/Project/Services'
import Header from '../layouts/Header'

export default function Project() {
    return (
        <>
            <Banner />
            <Heading />
            <Highlights />
            <Services />
            <Customers />
        </>
    )
}
