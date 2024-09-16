import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { TalkBtn } from "./TalkBtn";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array of expert data
const expertsData = [
    {
      name: "Prof. Bryan",
      rating: 12,
      finishedPapers: 2843,
      reviews: 2057,
      successRate: "99%",
      image: "/profBryan.png",
      stars: 5,
    },
    {
      name: "Prof. Carstensen",
      rating: 5,
      finishedPapers: 3000,
      reviews: 2500,
      successRate: "98%",
      image: "/ProfCarstensen.png",
      stars: 5,
    },
  
    {
      name: "Prof. Duncan",
      rating: 5,
      finishedPapers: 3000,
      reviews: 2500,
      successRate: "98%",
      image: "/profDuncan.png",
      stars: 5,
    },
    {
      name: "Prof. Fiona",
      rating: 5,
      finishedPapers: 3000,
      reviews: 2500,
      successRate: "98%",
      image: "/profFiona.png",
      stars: 5,
    },
    {
      name: "Prof. Gail",
      rating: 5,
      finishedPapers: 3000,
      reviews: 2500,
      successRate: "98%",
      image: "/profGail.png",
      stars: 5,
    },
    {
      name: "Prof. Ian",
      rating: 5,
      finishedPapers: 3000,
      reviews: 2500,
      successRate: "98%",
      image: "/profIan.png",
      stars: 5,
    },
    {
      name: "Prof. Larrisa",
      rating: 5,
      finishedPapers: 3000,
      reviews: 2500,
      successRate: "98%",
      image: "/profLarrisa.png",
      stars: 5,
    },
    {
      name: "Prof. Margaret",
      rating: 5,
      finishedPapers: 3000,
      reviews: 2500,
      successRate: "98%",
      image: "/profMargaret.png",
      stars: 5,
    },
    {
      name: "Dr. Warwick",
      rating: 5,
      finishedPapers: 3000,
      reviews: 2500,
      successRate: "98%",
      image: "/drWarwick.png",
      stars: 5,
    },
    // Add more expert objects as needed
  ];

const settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  draggable: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Expert = () => {
  return (
    <div className="w-[90%] mx-auto mt-12">
      <h1 className="text-[#5A5A5A] text-3xl md:text-6xl text-center font-bold pb-10 py-2">
         MEET OUR EXPERTS
      </h1>
      <Slider {...settings}>
        {expertsData.map((expert, index) => (
          <div
            key={index}
            className="bg-[#F3F9FD] w-[320px] h-auto rounded-xl border border-gray-300"
          >
            <div className="flex items-center justify-center gap-4 px-4 py-2">
              <Image
                src={expert.image}
                alt={expert.name}
                width={80}
                height={80}
                className="rounded-full"
                layout="fixed"
              />
              <div>
                <h1 className="text-[#007285] font-bold text-xl">
                  {expert.name}
                </h1>
                <h2 className="font-semibold">
                  No {expert.rating} in global Rating
                </h2>
                <div className="flex gap-1">
                  {Array(expert.stars).fill().map((_, i) => (
                    <FaStar key={i} color="#FFB801" />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[90%] bg-[#001E36] h-[2px] mx-4"></div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div>
                <h1 className="text-[#001E36] text-center font-bold">
                  {expert.finishedPapers}
                </h1>
                <h2 className="text-[#007285] text-base">Finished Papers</h2>
              </div>
              <div>
                <h1 className="text-[#001E36] text-center font-bold">
                  {expert.reviews}
                </h1>
                <h2 className="text-[#007285] text-base">Customer Reviews</h2>
              </div>
            </div>
            <div className="w-[90%] bg-[#001E36] h-[1px] mx-4 my-2 "></div>
            <div className="flex items-center justify-center gap-20 pb-4">
              <div>
                <h1 className="text-[#007285] font-bold text-center text-xl">
                  {expert.successRate}
                </h1>
                <h2 className="text-[#007285]">Success rate</h2>
              </div>
              <TalkBtn
                width="w-[110px]"
                mdWidth="md:w-[100px]"
                bgColor="#010621"
                label="Hire"
                icon={null}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Expert;
