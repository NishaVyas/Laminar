import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect } from "react"
import Header from "../../layouts/Header"
import banner1 from "../../assets/Product/banner1.jpeg"
import banner2 from "../../assets/Product/banner2.jpeg"
import banner3 from "../../assets/Product/banner3.jpeg"
import banner4 from "../../assets/Product/banner4.jpeg"

const banners = [banner1, banner2, banner3, banner4]

const Banner = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 1,
    },
    drag: true,
  })

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 4000)
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <>
      <Header />
      <section className="relative w-full overflow-hidden">
        <div ref={sliderRef} className="keen-slider">
          {banners.map((img, index) => (
            <div
              key={index}
              className="keen-slider__slide flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Banner ${index + 1}`}
                className="
                  w-full
                  h-auto
                  md:h-[520px]
                  object-cover
                  block
                "
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-white/40 hover:bg-white/70 p-2 rounded-full text-xs md:text-base"
        >
          ◀
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-white/40 hover:bg-white/70 p-2 rounded-full text-xs md:text-base"
        >
          ▶
        </button>
      </section>
    </>
  )
}

export default Banner
