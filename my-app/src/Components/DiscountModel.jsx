


"use client"
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import countryList from "react-select-country-list";
import Select from "react-select";
import { useRouter } from "next/navigation";
import axios from "axios";


const DiscountModal = ({ isOpen, onClose }) => {
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const options = countryList().getData();
    const router = useRouter();
  
    const handleCountryChange = (selectedCountry) => {
      setCountry(selectedCountry);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
  
      const data = {
        name,
        email,
        country: country ? country.label : "",
        phone,
      };
  
      try {
        const response = await axios.post("https://be.researchpublishinghouse.com/api/signup.php", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (response.status === 200 || response.status === 201) {
          // Clear form fields
          setName("");
          setEmail("");
          setPhone("");
  
          // Redirect to ThankYou page with query parameters
          const urlParams = new URLSearchParams({
            name: encodeURIComponent(name),
            email: encodeURIComponent(email),
            phone: encodeURIComponent(phone),
          });
          router.push(`/thankyou?${urlParams.toString()}`);
        } else {
          console.error("Error:", response);
        }
      } catch (err) {
        console.error("Error submitting form:", err);
      } finally {
        setIsLoading(false);
      }
    };

    // Move the conditional return after hook initialization
    if (!isOpen) return null;


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[90%] md:w-[400px] p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600">
          <IoClose size={20} />
        </button>

        {/* Banner */}
        <div className="flex items-center justify-between bg-blue-800 text-secondary p-3 rounded-t-lg">
          <span className="text-lg font-bold">50% DISCOUNT</span>
          <span className="text-sm bg-green-500 px-2 py-1 rounded-lg">UP TO 20% EXTRA DISCOUNT ON BIG ORDERS</span>
        </div>

        {/* Form */}
        <div className="p-4 border-t border-gray-200">
          <h2 className="text-lg font-bold text-center mb-4">Act Fast - Save Big!</h2>
          
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name*</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-secondary rounded-full focus:outline-none focus:ring-1 focus:ring-blue"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address*</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-secondary focus:outline-none focus:ring-1 focus:ring-blue"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Country*</label>
            <Select
              options={options}
              value={country}
              onChange={handleCountryChange}
              placeholder="---Select Country---"
              className="mt-1"
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: "#14125c",
                  boxShadow: "none",
                  borderRadius: "9999px",
                }),
              }}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number*</label>
            <div className="w-full rounded-full border border-secondary">
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={setPhone}
                placeholder="Phone Number"
                inputStyle={{
                  border: "none",
                  borderRadius: "9999px",
                  width: "100%",
                  paddingLeft: "52px", // Adjust for flag dropdown spacing
                }}
                buttonStyle={{
                  border: "none",
                  backgroundColor: "transparent",
                  paddingLeft: "10px", // Adjust as needed
                }}
                containerClass="w-full rounded-full"
                inputClass="w-full rounded-full px-4 py-2"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue text-white py-2 rounded-full font-bold hover:bg-blue-700 transition"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? "Submitting..." : "Get My Free Quote"}
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default DiscountModal;
