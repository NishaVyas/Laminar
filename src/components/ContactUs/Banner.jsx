import Header from "../../layouts/Header";
import Banners from "../../assets/Contact/banner.svg";

const Banner = () => {
    return (
        <>
            <Header />
            <section className="relative bg-white">
                <img
                    src={Banners}
                    alt="Pneumatic Banner"
                    className="w-full h-auto object-cover"
                />
            </section>
        </>
    )
}

export default Banner;