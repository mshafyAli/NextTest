


import React from 'react'
import Link from "next/link"
const Banner = () => {
    
  return (
    <div className='pt-16 relative'>
      <div className='w-full bg-secondary my-2 h-[18rem] flex justify-center items-center'>
        <h1 className='text-white text-4xl font-bold'>Privacy Policy</h1>
      </div>


      <div className='md:w-[70%] w-full mx-auto'>
      <div className="p-8 space-y-8">
      {/* Our Commitment To Your Privacy */}
      <section>
        <h2 className="text-2xl font-bold text-secondary">Our Commitment To Your Privacy</h2>
        <p className="mt-4  text-gray-700">
          At <Link href="/"> <span className="text-green">researchpublishinghouse.com</span></Link>, your privacy and security are not just a commitment, it&apos;s our responsibility. 
          We&apos;re here to deliver top-notch services with no risks to your privacy. Take a deep dive into our privacy policy to discover how we&apos;re 
          dedicated to keeping your information consistently safe and secure.
        </p>
      </section>

      {/* Information Collection Protocols */}
      <section>
        <h2 className="text-2xl font-bold text-secondary">Information Collection Protocols</h2>
        <p className="mt-4 text-gray-700">
          Our services ensure transparency at every step. Whether you need to register for exclusive discounts, need updates, or want to know 
          about our services, we only ask for information you willingly share.
        </p>
        <p className="mt-2  text-gray-700">
          Don&apos;t worry, your information is completely in safe hands! Our privacy protocols ensure your data stays confidential at all costs. 
          We never share any information with third parties. All the data about your personal information only gets shared with the concerned 
          personnel like your assigned experts and support team directly involved in evaluating your data for the requested services.
        </p>
      </section>

      {/* What Information We Collect? */}
      <section>
        <h2 className="text-2xl font-bold text-secondary">What Information We Collect?</h2>
        <p className="mt-4  text-gray-700">
          We only collect crucial information that is necessary to process your orders and sign up for updates on our website. 
          The information we collect includes:
        </p>
        <ul className="list-disc list-inside mt-2 text-base text-gray-700">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Requirements</li>
          <li>Cookies preferences</li>
        </ul>
      </section>

      {/* Cookies Policy */}
      <section>
        <h2 className="text-2xl font-bold text-secondary">Cookies Policy</h2>
        <p className="mt-4  text-gray-700">
          We use cookies to provide you with a personalized experience. It enhances your journey on our website by gathering insights into 
          how you interact with our pages and services.
        </p>
        <p className="mt-2  text-gray-700">
          In case you don&apos;t want cookies to track your usage, you can disable it through your browser settings. Rest assured, we do not collect 
          any personal or private information via cookies.
        </p>
        <p className="mt-2  font-semibold text-gray-700">
          For further information, feel free to contact our support team on live chat or send us an email. The safety and security of your data 
          is our priority.
        </p>
      </section>
    </div>

      </div>
    </div>
  )
}

export default Banner
