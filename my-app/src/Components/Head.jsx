import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

const Head = () => {
  return (
    <div className="bg-white w-full h-10 hidden md:block">
      <div className="w-[90%] mx-auto">
        <div className=" flex justify-center gap-20 items-center py-6">
    

           <div className="">
           <a href="tel:+44 161 818 9341" className="flex items-center gap-2" target="_blank"
                  rel="noopener noreferrer">
           <div className='bg-[#078954] w-6 h-6 rounded-full flex items-center justify-center'>
                <IoCall className='text-white' size={15} />
            </div>
            <h1 className="text-sm font-semibold">Call us: +44 161 818 9341</h1>
           </a>
           </div>

           <div className="">
           <a href="https://wa.me/447397145697" className="flex items-center gap-2" target="_blank"
                  rel="noopener noreferrer">
           <div className='bg-[#078954] w-6 h-6 rounded-full flex items-center justify-center'>
                <IoLogoWhatsapp className='text-white' size={15} />
            </div>
            <h1 className="text-sm font-semibold">Connect On Whatsapp: +44 739 714 5697</h1>
            </a>
           </div>
           <div className="">
           <a href="mailto:info@the-academians.co.uk" className="flex items-center gap-2" target="_blank"
                  rel="noopener noreferrer">
           <div className='bg-[#078954] w-6 h-6 rounded-full flex items-center justify-center'>
                <CgMail  className='text-white' size={15} />
            </div>
            <h1 className="text-sm font-semibold">Email us: info@the-academians.co.uk</h1>
            </a>
           </div>
        <div>

        </div>


        </div>
      </div>
    </div>
  )
}

export default Head