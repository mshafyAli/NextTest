import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

const Head = () => {
  return (
    <div className="bg-white w-full h-12">
      <div className="w-[80%] mx-auto">
        <div className=" flex justify-between items-center py-4">
    

           <div className="flex items-center gap-2">
           <div className='bg-[#078954] w-6 h-6 rounded-full flex items-center justify-center'>
                <IoCall className='text-white' size={15} />
            </div>
            <h1 className="text-sm font-semibold">Call us: +44 161 818 9341</h1>
           </div>

           <div className="flex items-center gap-2">
           <div className='bg-[#078954] w-6 h-6 rounded-full flex items-center justify-center'>
                <IoLogoWhatsapp className='text-white' size={15} />
            </div>
            <h1 className="text-sm font-semibold">Connect On Whatsapp: +44 739 714 5697</h1>
           </div>
           <div className="flex items-center gap-2">
           <div className='bg-[#078954] w-6 h-6 rounded-full flex items-center justify-center'>
                <CgMail  className='text-white' size={15} />
            </div>
            <h1 className="text-sm font-semibold">Email us: info@the-academians.co.uk</h1>
           </div>
        <div>

        </div>


        </div>
      </div>
    </div>
  )
}

export default Head