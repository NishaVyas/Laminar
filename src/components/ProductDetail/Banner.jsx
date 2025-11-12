import Header from "../../layouts/Header";
import Banners from "../../assets/Product/hero-banner.jpeg";

const Banner = () => {
    return (
        <>
            <Header />
            <section className="relative">
                <img
                    src={Banners}
                    alt="Pneumatic Banner"
                    className="w-full h-full object-cover"
                />
            </section>
        </>
    )
}

export default Banner;