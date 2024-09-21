const FooterBanner = () => {
  return (
    <div className="bg-white w-full h-auto">
      <div className="md:w-[80%] w-[95%] mx-auto">
        <div className="flex items-center flex-col gap-2 md:flex-row justify-between py-4">
          <h2 className="text-[12px] md:text-sm">Copyright © 2001 The Academians UK | All rights reserved</h2>
          <h2 className="text-sm">| Terms of Service | Privacy Policy | Refund Policy |</h2>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
