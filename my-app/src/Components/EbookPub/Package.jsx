import React from "react";
import Image from "next/image";

const Package = () => {
  return (
    <div className="md:w-[80%] w-[90%] mx-auto my-10">
      <div>
        <h1 className="md:text-4xl text-center text-2xl text-secondary font-bold mt-2">
          Let Our EBook Publishing Experts Turn Your Dreams Into Reality
        </h1>
        <p className="text-center md:px-10 px-0  py-2">
          Don&apos;t let anyone shatter your dreams of being a published author.
          Let our eBook publishing experts polish it so your books can get
          instantly approved.
        </p>

        {/* container */}
        <div>
          {/* 1st */}
          <div className="flex items-center flex-col md:flex-row justify-center md:gap-10 gap-4 mt-6">
            <div className="md:w-[45%] w-full">
              <h1 className="text-green text-xl font-bold pl-7 uppercase">
                Upload your ebook manuscript
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">01</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Let Us KNOW!
                  </h1>
                  <p>
                    Submit your manuscript for any assistance, be it formatting,
                    editing, ISBN allocation, DRM, or any other specific
                    requirement you have. Our team will review your request
                    before you get to the next step.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image src="/one.webp" alt="package" width={500} height={100} />
            </div>
          </div>

          {/* 2nd */}
          <div className="md:flex hidden flex-col md:flex-row items-center justify-center gap-20">
            <div>
              <Image src="/two.webp" alt="package" width={300} height={100} />
            </div>
            <div className="md:w-[45%] w-full">
              <h1 className="text-green text-xl font-bold pl-8 uppercase">
                Pick the best cover for your ebook
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">02</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Huge Range of Covers
                  </h1>
                  <p>
                    For publication, pick any cover you like from many
                    illustrations made by our amazing designers and artists for
                    your ebook. Let us make your book into a masterpiece with
                    colors that speak volumes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:hidden flex-col md:flex-row items-center justify-center md:gap-20 gap-4">
            <div className="md:w-[45%] w-full">
              <h1 className="text-green text-xl font-bold pl-8 uppercase">
                Pick the best cover for your ebook
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">02</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Huge Range of Covers
                  </h1>
                  <p>
                    For publication, pick any cover you like from many
                    illustrations made by our amazing designers and artists for
                    your ebook. Let us make your book into a masterpiece with
                    colors that speak volumes.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image src="/two.webp" alt="package" width={300} height={100} />
            </div>
          </div>

          {/* 3rd */}
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 gap-4 mt-10">
            <div className="md:w-[45%] w-full">
              <h1 className="text-green text-xl font-bold pl-8 uppercase">
                Place your order via order form
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">03</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Fill It To FINISH!
                  </h1>
                  <p>
                    Finish your order by filling out our order form and get on
                    your journey to become a published author on globally
                    recognized platforms. Our experts and support team are
                    always available for your assistance.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image src="/three.webp" alt="package" width={350} height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
