import Header from "../../layouts/Header";
import { useApiData } from "../../hooks/useApiData";
// Fallback image
import FallbackBanner from "../../assets/Pneumatic/banner.svg";

const Banner = () => {
    // Fetch banner from API
    const { data: apiBanner } = useApiData(
        "/api/home?type=pneumatic-banner",
        null,
        (data) => {
            const item = Array.isArray(data) ? data[0] : data;
            if (!item || !item.imageUrl) return null;
            return item.imageUrl;
        }
    );

    // Use API banner if available, otherwise use fallback
    const bannerImage = apiBanner || FallbackBanner;

    return (
        <>
            <Header />
            <section className="relative bg-white">
                <img
                    src={bannerImage}
                    alt="Pneumatic Banner"
                    className="w-full h-auto object-cover"
                />
            </section>
        </>
    )
}

export default Banner;