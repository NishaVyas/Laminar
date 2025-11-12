import { useEffect, useRef, useState } from "react";
import about from "../../assets/Homepage/About.svg";
import img1 from "../../assets/clients/1.png";
import img2 from "../../assets/clients/2.png";
import img3 from "../../assets/clients/3.png";
import img4 from "../../assets/clients/4.png";
import img5 from "../../assets/clients/5.png";
import img6 from "../../assets/clients/6.png";
import img7 from "../../assets/clients/7.png";
import img8 from "../../assets/clients/8.png";
import img9 from "../../assets/clients/1.png";
import img10 from "../../assets/clients/10.png";
import img11 from "../../assets/clients/11.png";
import img12 from "../../assets/clients/12.png";
import img13 from "../../assets/clients/13.png";
import img14 from "../../assets/clients/14.png";
import img15 from "../../assets/clients/15.png";
import img16 from "../../assets/clients/16.png";
import img17 from "../../assets/clients/17.png";
import img18 from "../../assets/clients/18.png";
import img19 from "../../assets/clients/19.png";
import img20 from "../../assets/clients/20.png";
import img21 from "../../assets/clients/21.png";
import img22 from "../../assets/clients/22.png";
import img23 from "../../assets/clients/23.png";
import img24 from "../../assets/clients/24.png";
import img25 from "../../assets/clients/25.png";
import img26 from "../../assets/clients/26.png";
import img27 from "../../assets/clients/27.png";
import img28 from "../../assets/clients/28.png";
import img29 from "../../assets/clients/29.png";
import img30 from "../../assets/clients/30.png";
import img31 from "../../assets/clients/31.png";
import img32 from "../../assets/clients/32.png";
import img33 from "../../assets/clients/33.png";
import img34 from "../../assets/clients/34.png";
import img35 from "../../assets/clients/35.png";
import img36 from "../../assets/clients/36.png";
import img37 from "../../assets/clients/37.png";
import img38 from "../../assets/clients/38.png";
import img39 from "../../assets/clients/39.png";

const initialLogos = [
    { src: img1, alt: "Client 1" },
    { src: img2, alt: "Client 2" },
    { src: img3, alt: "Client 3" },
    { src: img4, alt: "Client 4" },
    { src: img5, alt: "Client 5" },
    { src: img6, alt: "Client 6" },
    { src: img7, alt: "Client 7" },
    { src: img8, alt: "Client 8" },
    { src: img9, alt: "Client 9" },
    { src: img10, alt: "Client 10" },
    { src: img11, alt: "Client 11" },
    { src: img12, alt: "Client 12" },
    { src: img13, alt: "Client 13" },
    { src: img14, alt: "Client 14" },
    { src: img15, alt: "Client 15" },
    { src: img16, alt: "Client 16" },
    { src: img17, alt: "Client 17" },
    { src: img18, alt: "Client 18" },
    { src: img19, alt: "Client 19" },
    { src: img20, alt: "Client 20" },
    { src: img21, alt: "Client 21" },
    { src: img22, alt: "Client 22" },
    { src: img23, alt: "Client 23" },
    { src: img24, alt: "Client 24" },
    { src: img25, alt: "Client 25" },
    { src: img26, alt: "Client 26" },
    { src: img27, alt: "Client 27" },
    { src: img28, alt: "Client 28" },
    { src: img29, alt: "Client 29" },
    { src: img30, alt: "Client 30" },
    { src: img31, alt: "Client 31" },
    { src: img32, alt: "Client 32" },
    { src: img33, alt: "Client 33" },
    { src: img34, alt: "Client 34" },
    { src: img35, alt: "Client 35" },
    { src: img36, alt: "Client 36" },
    { src: img37, alt: "Client 37" },
    { src: img38, alt: "Client 38" },
    { src: img39, alt: "Client 39" },
];

const Clients = () => {
    const [logos, setLogos] = useState(initialLogos);
    const cellRefs = useRef({});

    const shuffleMultipleLogos = () => {
        const positions = {};
        logos.forEach((logo) => {
            const el = cellRefs.current[logo.alt];
            if (el) {
                positions[logo.alt] = el.getBoundingClientRect();
            }
        });

        const shuffled = [...logos];
        const usedIndices = new Set();

        for (let k = 0; k < 1; k++) {
            let i, j;
            do {
                i = Math.floor(Math.random() * shuffled.length);
            } while (usedIndices.has(i));
            usedIndices.add(i);

            do {
                j = Math.floor(Math.random() * shuffled.length);
            } while (j === i || usedIndices.has(j));
            usedIndices.add(j);

            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        setLogos(shuffled);

        requestAnimationFrame(() => {
            shuffled.forEach((logo) => {
                const el = cellRefs.current[logo.alt];
                const newRect = el.getBoundingClientRect();
                const oldRect = positions[logo.alt];
                if (!oldRect || !newRect) return;

                const dx = oldRect.left - newRect.left;
                const dy = oldRect.top - newRect.top;

                if (dx || dy) {
                    el.style.transform = `translate(${dx}px, ${dy}px)`;
                    el.style.transition = "none";
                    requestAnimationFrame(() => {
                        el.style.transform = "";
                        el.style.transition = "transform 500ms ease";
                    });
                }
            });
        });
    };

    useEffect(() => {
        const interval = setInterval(shuffleMultipleLogos, 1000);
        return () => clearInterval(interval);
    }, [logos]);

    return (
        <section
            className="relative w-full py-16 text-white"
            style={{
                backgroundImage: `url(${about})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="relative z-10 max-w-7xl mx-auto px-[calc(var(--spacing)_*_4)] sm:px-6">
                <p className="text-sm text-white/80 text-left md:text-center mb-2">
                    C L I E N T S
                </p>
                <h2 className="text-3xl lg:text-3xl font-bold text-left md:text-center text-white mb-12">
                    Our Trusted Clients
                </h2>

                {/* Changed grid: 3 columns on mobile */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-0">
                    {logos.map((logo) => (
                        <div
                            key={logo.alt}
                            className="flex justify-center items-center h-25 p-4 border"
                            style={{
                                border: "0.5px solid #236293",
                                padding: "12px",
                                transition: "transform 500ms ease",
                            }}
                        >
                            <img
                                src={logo.src}
                                ref={(el) => (cellRefs.current[logo.alt] = el)}
                                alt={logo.alt}
                                className="h-12 w-22 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
