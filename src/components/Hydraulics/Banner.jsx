import Header from "../../layouts/Header";
import { useApiData } from "../../hooks/useApiData";
// Fallback image
import FallbackBanner from "../../assets/Hydraulics/banner.jpeg";

const Banner = () => {
    // Fetch banner from API
    const { data: apiBanner } = useApiData(
        "/api/home?type=hydraulics-banner",
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
            <section className="relative">
                <img
                    src={bannerImage}
                    alt="Hydraulics Banner"
                    className="w-full h-full object-cover"
                />
            </section>
        </>
    )
}

export default Banner;