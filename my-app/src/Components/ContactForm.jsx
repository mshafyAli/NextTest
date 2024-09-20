'use client'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';



const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false); 
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = { name, email, phone };

      console.log(data);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(`http://localhost/php-backend/api/signup.php`, data, config);

      if (res.status === 201 || res.status === 200) {
        setName("");
        setEmail("");
        setPhone("");
        console.log(res);
        const urlParams = new URLSearchParams({
          name:encodeURIComponent(name),
          email:encodeURIComponent(email),
          phone:encodeURIComponent(phone),
        
        })
        router.push(`/thankyou?${urlParams.toString()}`);
       
      } else {
        console.error("Error:", res);
      }
    } catch (err) {
      console.error("Error:", err);
    }
    finally{
      setLoading(false);
    }
    
  };
  return (
    
        <div className="w-full md:w-1/2 flex justify-center ">
          <div className="bg-primary w-full md:w-[450px] rounded-2xl p-6 md:p-8">
            <h1 className="text-white text-xl md:text-2xl font-bold mb-4">
              Our team is available 24/7 to provide you the best
              assistance
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <input
                  className="border-2 border-[#EEEEEE] outline-none  p-3 rounded-md focus:border-blue-500"
                  type="text"
                  placeholder="Full Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="border-2 border-[#EEEEEE] outline-none p-3 rounded-md focus:border-blue-500"
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="border-2 border-[#EEEEEE] outline-none p-3 rounded-md focus:border-blue-500"
                  type="tel"
                  placeholder="Phone No."
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <button
                  className="w-full md:w-auto h-12 text-[#16334F] font-bold bg-white flex items-center justify-center  rounded-md uppercase"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
   
  )
}

export default ContactForm