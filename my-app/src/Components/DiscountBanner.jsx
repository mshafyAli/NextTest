import React, { useState } from "react";
import { MdCall } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import 'react-phone-input-2/lib/style.css';
import Select from "react-select";
import countryList from "react-select-country-list";

const DiscountBanner = () => {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(null);
  const options = countryList().getData();

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
  };
  return (
    <div className="bg-darkBlue w-full h-auto  my-12">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col gap-12 lg:flex-row items-center justify-center py-8  text-white ">
          {/* Left Section */}
          <div className="lg:w-[40%] mb-10 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Now&apos;s Your Chance To Publish Your Research Paper
            </h2>
            <p className="text-sm mb-6">
              Finally, it&apos;s time to get your research paper published. You
              have been working on it for months and now you have got the chance
              to get it published in a professional manner.
            </p>
            <div className="flex items-center gap-4 h-full">
              <button className="bg-white text-[#0A0E52] px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white">
                Let's Discuss!
              </button>
              <a
                href={`https://wa.me/447456428217?text=${encodeURIComponent(
                  "I want to inquire about your services please."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2">
                  <MdCall size={25} />
                  <span className="text-xl font-bold">+44 7456 428217</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-[30%] bg-white text-[#0A0E52] py-6 px-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Get up to{" "}
              <span className="text-green font-bold">50%</span> OFF on first
              order
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name*</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-secondary rounded-full focus:outline-none focus:ring-1 focus:ring-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-full border border-secondary focus:outline-none focus:ring-1 focus:ring-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country*
                </label>
                {/* <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>---Select Country---</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                </select> */}
                <Select
                  options={options}
                  value={country}
                  onChange={handleCountryChange}
                  placeholder="---Select Country---"
                  className="mt-1 "
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: "#14125c",
                      boxShadow: "none",
                      borderRadius: "9999px",
                     
                    }),
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number*
                </label>
              

<div className="w-full rounded-full  border border-secondary">
      <PhoneInput
        country={'us'}
        value={phone}
        onChange={setPhone}
        placeholder="Phone Number"
        inputStyle={{
          border: 'none',
          borderRadius: '9999px',
          width: '100%',
          paddingLeft: '52px', // Adjust for flag dropdown spacing
        }}
        buttonStyle={{
          border: 'none',
          backgroundColor: 'transparent',
          paddingLeft: '10px', // Adjust as needed
        }}
        containerClass="w-full rounded-full"
        inputClass="w-full rounded-full px-4 py-2"
      />
    </div>
               
              </div>
              <button
                type="submit"
                className="w-full bg-blue text-white py-2 rounded-full font-bold hover:bg-blue-700 transition"
              >
                Get My Free Quote
              </button>
            </form>
          </div>
        </div>
        {/* <div className=''>
                    
                </div> */}
      </div>
    </div>
  );
};

export default DiscountBanner;
