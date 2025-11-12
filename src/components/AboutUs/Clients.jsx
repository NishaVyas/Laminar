import { useEffect, useRef, useState } from "react";
import Lambert from "../../assets/AboutUs/Lambert.svg";
import TridentGroup from "../../assets/Homepage/TridentGroup.svg";
import Emami from "../../assets/AboutUs/emami.svg";
import Siemens from "../../assets/Homepage/Siemens.svg";
import Ranbaxy from "../../assets/Homepage/Ranbaxy.svg";
import Lohr from "../../assets/Homepage/Lohr.svg";
import ABB from "../../assets/Homepage/ABB.svg";
import Tata from "../../assets/Homepage/Tata.svg";
import JCB from "../../assets/Homepage/JCB.svg";
import Hero from "../../assets/Homepage/Hero.svg";
import LeylandTrucks from "../../assets/AboutUs/LeylandTrucks.svg";
import VanHool from "../../assets/Homepage/VanHool.svg";
import ITC from "../../assets/AboutUs/ITC.svg";
import SwarajMazda from "../../assets/Homepage/SwarajMazda.svg";
import Elgi from "../../assets/AboutUs/Elgi.svg";
import BHEL from "../../assets/Homepage/BHEL.svg";
import Escorts from "../../assets/AboutUs/Escorts.svg";
import VolvoTrucks from "../../assets/AboutUs/VolvoTrucks.svg";

const initialLogos = [
  { src: Lambert, alt: "Lambert" },
  { src: TridentGroup, alt: "Trident Group" },
  { src: Emami, alt: "Emami" },
  { src: Siemens, alt: "Siemens" },
  { src: Ranbaxy, alt: "Ranbaxy" },
  { src: Lohr, alt: "Lohr" },
  { src: ABB, alt: "ABB" },
  { src: Tata, alt: "Tata" },
  { src: JCB, alt: "JCB" },
  { src: Hero, alt: "Hero" },
  { src: LeylandTrucks, alt: "Leyland Trucks" },
  { src: VanHool, alt: "Van Hool" },
  { src: ITC, alt: "ITC Limited" },
  { src: SwarajMazda, alt: "Swaraj Mazda" },
  { src: Elgi, alt: "Elgi" },
  { src: BHEL, alt: "BHEL" },
  { src: Escorts, alt: "Escorts" },
  { src: VolvoTrucks, alt: "Volvo Trucks" },
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
    <section className="w-full py-16 bg-gray-50">
      <div
        className="relative z-10 max-w-7xl mx-auto px-[calc(var(--spacing)*4)] md:px-6"
      >
        <h2 className="text-3xl lg:text-4xl text-[#001f3f] mb-10 text-left md:text-center">
          Our Trusted{" "}
          <span className="text-[#0061A6] font-bold">Clients</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center h-25 p-4 border justify-start md:justify-center"
              style={{
                border: "0.5px solid #CFCFCF",
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
