import React, { useRef, useState } from "react";
import map from "../../assets/Contact/map.svg";
import email from "../../assets/Contact/email.svg";
import phone from "../../assets/Contact/phone.svg";

function ContactInfo() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setTimeout(() => {
        if (res.ok) {
          form.current.reset();
        } else {
          console.error(result.error);
        }
        setLoading(false);
      }, 1500);
    } catch (err) {
      console.error(err);
      setTimeout(() => setLoading(false), 1500);
    }
  };

  const advantagesData = [
    { title: "+911204774261", icon: phone },
    { title: "info@laminarindia.com", icon: email },
    { title: "C-48, Site-C, Surajpur Greater Noida - 201306 (UP) India", icon: map },
  ];

  return (
    <div className="bg-[#fff] pt-4 pb-10 md:py-10 mt-8 px-[calc(var(--spacing)_*_4)] md:px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Contact Info */}
          <div className="md:w-2/3 mt-6 md:mt-0 md:pl-8 text-left">
            <h2 className="text-3xl text-gray-900 mb-2">
              Get In <span className="text-[#0061A6] font-semibold">Touch</span>
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              Should your enquiry be urgent please use our Branch Finder <br /> tool to contact your local branch.
            </p>
            <div className="grid gap-y-8 gap-x-1">
              {advantagesData.map((advantage, index) => (
                <div key={index} className="flex flex-col items-start space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#0061A6] rounded-full flex items-center justify-center w-8 h-8">
                      <img src={advantage.icon} alt="" className="w-5 h-5" />
                    </div>
                    <h3 className="font-[400] text-sm text-gray-900">{advantage.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3 mt-8 md:-mt-14 py-14 pl-4">
            <h2 className="text-3xl text-gray-900 mb-4">
              Message <span className="text-[#0061A6] font-semibold">Us</span>
            </h2>
            <form ref={form} onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 max-w-xl">
              <div className="col-span-1">
                <label className="block text-sm mb-1 text-[#010B1E]">Name</label>
                <input name="name" className="w-full text-sm border bg-[#FFFFFF] border-[#D3DBE7] p-1.5 h-[40px]" required type="text" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm mb-1 text-[#010B1E]">Contact No.</label>
                <input name="contact" className="w-full text-sm border bg-[#FFFFFF] border-[#D3DBE7] p-1.5 h-[40px]" required type="text" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm mb-1 text-[#010B1E]">Email</label>
                <input name="email" className="w-full text-sm border bg-[#FFFFFF] border-[#D3DBE7] p-1.5 h-[40px]" required type="email" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm mb-1 text-[#010B1E]">Company Name</label>
                <input name="company" className="w-full text-sm border bg-[#FFFFFF] border-[#D3DBE7] p-1.5 h-[40px]" type="text" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm mb-1 text-[#010B1E]">Industry</label>
                <input name="industry" className="w-full text-sm border bg-[#FFFFFF] border-[#D3DBE7] p-1.5 h-[40px]" type="text" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm mb-1 text-[#010B1E]">City</label>
                <input name="city" className="w-full text-sm border bg-[#FFFFFF] border-[#D3DBE7] p-1.5 h-[40px]" type="text" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm mb-1 text-[#010B1E]">Zip Code</label>
                <input name="zip" className="w-full text-sm border bg-[#FFFFFF] border-[#D3DBE7] p-1.5 h-[40px]" type="text" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm mb-1 text-[#010B1E]">Country</label>
                <select name="country" className="w-full text-sm border bg-[#FFFFFF] border-[#D3DBE7] p-1.5 h-[40px]">
                  <option value="">Select</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Singapore">Singapore</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="China">China</option>
                  <option value="Japan">Japan</option>
                  <option value="Brazil">Brazil</option>
                  <option value="South Africa">South Africa</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm mb-1 text-[#010B1E]">Description</label>
                <textarea name="message" className="w-full text-sm border bg-[#FFFFFF] border-[#D3DBE7] p-1.5 h-[120px]" required rows="4" />
              </div>
              <div className="col-span-2 text-left">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-48 h-10 flex items-center justify-center bg-[#0061A6] text-white text-sm transition disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#0061a8]"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Submit →"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
