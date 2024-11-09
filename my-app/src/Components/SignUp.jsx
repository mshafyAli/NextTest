

"use client";
import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignUp = () => {
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

  return (
    <>
      <div className="flex justify-center items-center">


        <Image src="/brand.png" alt="Discount" width={300} height={100} className="" />

        
      </div>

      

      <div className="max-w-md mx-auto  border border-green bg-white rounded-lg shadow-md">


      <h1 className="text-secondary text-center pb-4 pt-2 text-2xl font-bold ">
          Act Fast - Save Big!
        </h1>
          <div className="flex justify-center  -mt-2">   <Image src="/discount.png" alt="Discount" width={440} height={100} className="" /></div>
       <div className="p-6">
      

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
    </>
  );
};

export default SignUp;

