import Header from "../../layouts/Header";
import { useApiData } from "../../hooks/useApiData";
// Fallback image
import FallbackBanner from "../../assets/Manufacturing/banner.svg";

const Banner = () => {
    // Fetch manufacturing banner from API
    const { data: apiBanner } = useApiData(
        "/api/home?type=manufacturing-banner",
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
                    alt="Manufacturing Banner"
                    className="w-full h-auto object-cover"
                />
            </section>
        </>
    )
}

export default Banner;
