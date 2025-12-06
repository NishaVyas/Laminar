import { useApiData } from "../../hooks/useApiData";

// Fallback content (original hardcoded content)
const fallbackContent = `
    <p>Laminar serves diversified end markets in the fluid power segment with its core product categories of low-pressure connectors, pneumatics, hose & fittings, industrial piping & industrial air filtration solution.</p>
    <p>Today, we serve global customers through product excellence, scalable infrastructure & a commitment to international quality standards, & have forged long term partnerships across geographies & borders.</p>
    <p>As Parker Hannifin's leading distributor & value-add partner, Laminar has decades of experience & the market expertise to execute projects with cutting-edge solutions.</p>
    <p>With our strong & certified manufacturing footprint in plastic extrusion, injection molding, machining, hose & tube assembly, we have the operational agility & excellence to meet stringent industrial regulations & deliver bespoke solutions for critical applications. Our strengths in R&D, strategic sourcing, designing & execution give us the ability to adapt & be at pace with the ever-evolving end markets that we serve.</p>
    <p>Our resourceful & highly motivated team ensures that we live up to our motto of keeping our customers businesses moving by providing high quality products at the best in industry lead times.</p>
`;

// Transform API data to get the overview content
const transformOverview = (apiData) => {
    if (!Array.isArray(apiData) || apiData.length === 0) return null;
    // Get the most recent overview (last item)
    const item = apiData[apiData.length - 1];
    return item.description || null;
};

function Step() {
    // Fetch company overview from API
    const { data: overviewContent } = useApiData(
        "/api/home?type=aboutus-overview",
        null,
        transformOverview
    );

    // Use API data if available, otherwise use fallback
    const content = overviewContent || fallbackContent;

    return (
        <section className="bg-gray-50 py-10">
            <div className="max-w-4xl mx-auto text-left md:text-center px-[calc(var(--spacing)_*_4)] sm:px-0">
                <h2 className="text-3xl md:text-3xl font-small font-light text-[#010B1E] mt-10 mb-10">
                    Unmatched precision to your{" "}
                    <span className="text-[#0061A6] font-semibold">
                        exacting <br className="hidden md:inline" /> specifications
                    </span>{" "}
                    at every step.
                </h2>
                <div
                    className="mt-4 mb-10 text-base md:text-sm text-gray-700 leading-relaxed [&>p]:mb-6"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </section>
    );
}

export default Step;
