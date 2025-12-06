import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { API_BASE_URL, getImageUrl } from "../config/api";
import Header from "../layouts/Header";
import { IoIosCheckmark } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
// Fallback images
import FallbackBanner from "../assets/Product/hero-banner.jpeg";
import circle from "../assets/Pneumatic/circle.svg";

function ProductDetailPage() {
  const { slug } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Derive slug from URL path if not from params
  const productSlug = slug || location.pathname.slice(1); // Remove leading "/"

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      setError(null);
      try {
        // First get the product by slug
        const productRes = await fetch(`${API_BASE_URL}/api/product/${productSlug}`);
        if (!productRes.ok) {
          throw new Error("Product not found");
        }
        const productData = await productRes.json();
        setProduct(productData);

        // Then get the product details using product._id
        const detailsRes = await fetch(`${API_BASE_URL}/api/product-details/${productData._id}`);
        if (detailsRes.ok) {
          const detailsData = await detailsRes.json();
          setSections(detailsData);
        }
      } catch (err) {
        console.error("Error fetching product data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (productSlug) {
      fetchProductData();
    }
  }, [productSlug]);

  // Group sections by type
  const headingSection = sections.find((s) => s.sectionType === "heading");
  const featuresSection = sections.find((s) => s.sectionType === "features");
  const categorySections = sections.filter((s) => s.sectionType === "category");
  const advantagesSection = sections.find((s) => s.sectionType === "advantages");
  const conclusionSection = sections.find((s) => s.sectionType === "conclusion");

  // Get banner image from product or use fallback
  const bannerImage = product?.banners?.[0]?.imageUrl ? getImageUrl(product.banners[0].imageUrl) : FallbackBanner;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#0061A6] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Show error state if product not found
  if (error || !product) {
    return (
      <>
        <Header />
        <section className="py-16 px-[calc(var(--spacing)*4)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl text-gray-900 mb-4">Product Not Found</h2>
            <p className="text-gray-600">
              The product you are looking for does not exist or has been removed.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Banner - Same style as Pneumatic Banner */}
      <Header />
      <section className="relative bg-white">
        <img
          src={bannerImage}
          alt={product?.title || "Product Banner"}
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Heading Section - Same style as Automation component */}
      {headingSection && (
        <section className="bg-gray-50 pt-8 pb-6 md:py-16 px-[calc(var(--spacing)_*_4)] md:px-0">
          <div className="max-w-4xl mx-auto text-left md:text-center">
            <h2 className="text-3xl md:text-3xl text-gray-900">
              {headingSection.heading}{" "}
              <span className="text-[#0061A6]">{headingSection.highlightedText}</span>
            </h2>
            {headingSection.description && (
              <p className="mt-6 text-base md:text-sm text-gray-700 leading-relaxed">
                {headingSection.description}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Features Section - Same style as Pneumatic Features */}
      {featuresSection && featuresSection.items?.length > 0 && (
        <section className="bg-gray-50 py-10 px-[calc(var(--spacing)*4)] md:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-3xl text-gray-900 text-left md:text-center">
              {featuresSection.heading}{" "}
              <span className="text-[#0061A6]">{featuresSection.highlightedText}</span>
            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-y-10 gap-x-12">
              {featuresSection.items.map((feature, index) => {
                const isShifted = index % 2 === 1;

                return (
                  <div
                    key={index}
                    className={`flex flex-col items-start space-y-1 ${
                      isShifted ? "md:ml-20" : ""
                    }`}
                  >
                    {/* Title with Icon */}
                    <div className="flex items-center space-x-2">
                      <div className="bg-[#0061A6] rounded-full flex items-center justify-center w-4 h-4">
                        <IoIosCheckmark className="text-white w-3.5 h-3.5" />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description below */}
                    <p className="text-gray-700 text-sm ml-7">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Categories Section - Same style as Pneumatic Categories */}
      {categorySections.length > 0 && (
        <div className="bg-[#F9FAFB] pt-10 pb-0 md:pb-10">
          <div className="max-w-7xl mx-auto px-[calc(var(--spacing)*4)] md:px-0">
            <h2 className="text-3xl md:text-3xl text-gray-900 text-left md:text-center mb-10">
              {categorySections[0]?.heading || product?.title}{" "}
              <span className="text-[#0061A6] md:text-4xl font-bold">
                {categorySections[0]?.highlightedText || "Categories"}
              </span>
            </h2>

            {categorySections.map((category, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row bg-white border border-[#0061A6] mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Image Section */}
                <div className="md:w-1/3 bg-[#E3EEF6] flex justify-center items-center p-4 md:p-6 min-h-[200px]">
                  {category.image && (
                    <img
                      src={getImageUrl(category.image)}
                      alt={category.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-4 md:p-8">
                  <h2 className="text-xl font-semibold text-[#1a3c5e]">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex flex-col md:flex-row mt-4 gap-x-12 gap-y-6">
                    {/* Applications */}
                    {category.applications?.filter(a => a).length > 0 && (
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-[#0061A6] mb-4 mt-4">
                          Applications
                        </h3>
                        <ul className="mt-2 space-y-2">
                          {category.applications.filter(a => a).map((app, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-5 h-5 mt-[2px] flex items-center justify-center">
                                <img
                                  className="w-4 h-4 object-contain"
                                  src={circle}
                                  alt=""
                                />
                              </span>
                              <span className="text-gray-600 text-sm mb-2">{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Key Benefits */}
                    {category.benefits?.filter(b => b).length > 0 && (
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-[#0061A6] mb-4 mt-4">
                          Key Benefits
                        </h3>
                        <ul className="mt-2 space-y-2">
                          {category.benefits.filter(b => b).map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-5 h-5 mt-[2px] flex items-center justify-center">
                                <img className="w-4 h-4 object-contain" src={circle} alt="" />
                              </span>
                              <span className="text-gray-600 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Download Catalog Button */}
                  {category.url && (
                    <a
                      href={getImageUrl(category.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="mt-8 bg-[#0061A6] w-52 cursor-pointer hover:bg-[#005089] text-white text-xs font-medium py-3 px-10 flex justify-center items-center"
                    >
                      Download Catalog
                      <FaArrowRightLong className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Advantages Section - Same style as Pneumatic Advantages */}
      {advantagesSection && advantagesSection.items?.length > 0 && (
        <div className="bg-[#F9FAFB] py-6 md:py-10 px-[calc(var(--spacing)_*_4)] sm:px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row">
              {/* Advantages List */}
              <div className="md:w-2/3 mt-6 md:mt-0 md:pl-8">
                <h2 className="text-3xl md:text-3xl text-gray-900 mb-10">
                  {advantagesSection.heading}{" "}
                  <span className="text-[#0061A6] font-semibold md:text-3xl">
                    {advantagesSection.highlightedText}
                  </span>
                </h2>

                <div className="grid gap-y-5 gap-x-1">
                  {advantagesSection.items.map((advantage, index) => (
                    <div key={index} className="flex flex-col items-start space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="bg-[#0061A6] rounded-full flex items-center justify-center w-4 h-4">
                          <IoIosCheckmark className="text-white w-3.5 h-3.5" />
                        </div>
                        <h3 className="font-semibold text-sm text-gray-900">
                          {advantage.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm ml-7">{advantage.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              {advantagesSection.image && (
                <div className="md:w-2/3 mt-8 md:-mt-14">
                  <img
                    src={getImageUrl(advantagesSection.image)}
                    alt="Advantages"
                    className="w-full max-w-[700px] max-h-[1000px] h-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Conclusion Section */}
      {conclusionSection && conclusionSection.text && (
        <section className="bg-gray-50 py-12 px-[calc(var(--spacing)*4)] md:px-0">
          <div className="max-w-4xl mx-auto text-left md:text-center">
            {(conclusionSection.heading || conclusionSection.highlightedText) && (
              <h2 className="text-3xl md:text-3xl text-gray-900 mb-6">
                {conclusionSection.heading}{" "}
                <span className="text-[#0061A6] font-semibold">{conclusionSection.highlightedText}</span>
              </h2>
            )}
            <p className="text-base md:text-sm text-gray-700 leading-relaxed">
              {conclusionSection.text}
            </p>
          </div>
        </section>
      )}

      {/* Fallback when no sections exist */}
      {!loading && sections.length === 0 && (
        <section className="bg-gray-50 pt-8 pb-6 md:py-16 px-[calc(var(--spacing)_*_4)] md:px-0">
          <div className="max-w-4xl mx-auto text-left md:text-center">
            <h2 className="text-3xl md:text-3xl text-gray-900">
              {product?.title || "Product Details"}
            </h2>
            <p className="mt-6 text-base md:text-sm text-gray-700 leading-relaxed">
              {product?.description || "Product details are being updated. Please check back later."}
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductDetailPage;
