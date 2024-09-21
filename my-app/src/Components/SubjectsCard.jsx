

import { FaCalculator, FaBook, FaIndustry, FaPalette,FaStarOfDavid,FaPeopleArrows  } from "react-icons/fa";
import { LuLampDesk } from "react-icons/lu";
import { FaGripLines,FaArrowsTurnToDots, FaUserDoctor,FaComputer,FaBuildingColumns } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { TbSpeakerphone } from "react-icons/tb";
import { MdPsychology,MdOutlineStackedBarChart } from "react-icons/md";
import { RiBuilding2Fill } from "react-icons/ri";


const subjects = [
  { id: 1, name: "Accounting & Finance", icon: <FaCalculator color="white" size={20} /> },
  { id: 2, name: "Agriculture & Forestry", icon: <FaBook color="white" size={20} /> },
  { id: 3, name: "Architecture", icon: <FaIndustry color="white" size={20} /> },
  { id: 4, name: "Art & Design", icon: <FaPalette color="white" size={20} /> },
  { id: 5, name: "Biological Sciences", icon: <LuLampDesk color="white" size={20} /> },
  { id: 6, name: "Business Management", icon: < FaGripLines color="white" size={20} /> },
  { id: 7, name: "Chemistry", icon: <FaStarOfDavid  color="white" size={20} /> },
  { id: 8, name: "Philosophy", icon: <FaArrowsTurnToDots color="white" size={20} /> },
  { id: 9, name: "Computer Science", icon: <FaComputer color="white" size={20} /> },
  { id: 10, name: "Economics", icon: <MdOutlineStackedBarChart color="white" size={20} /> },
  { id: 11, name: "Nursing", icon: <FaUserDoctor color="white" size={20} /> },
  { id: 12, name: "Engineering", icon: <FaPalette color="white" size={20} /> },
  { id: 13, name: "Marketing", icon: <TbSpeakerphone color="white" size={20} /> },
  { id: 14, name: "Management", icon: <FaGripLines color="white" size={20} /> },
  { id: 15, name: "Law", icon: <GoLaw color="white" size={20} /> },
  { id: 16, name: "Mathematics", icon: <FaCalculator color="white" size={20} /> },
  { id: 17, name: "Physics", icon: <RiBuilding2Fill color="white" size={20} /> },
  { id: 18, name: "Psychology", icon: <MdPsychology color="white" size={25} /> },
  { id: 19, name: "Sociology", icon: <FaPeopleArrows color="white" size={20} /> },
  { id: 20, name: "Politics", icon: <FaBuildingColumns color="white" size={20} /> },
];

const SubjectsCard = () => {
  return (
    <div className="md:w-[70%] w-[90%] mx-auto mt-10">
      <h1 className="text-[#5A5A5A] text-3xl md:text-6xl text-center font-bold pb-10 py-2 uppercase">
        Subjects We Covered
      </h1>
      <h2 className="text-[#5A5A5A] text-2xl md:text-4xl text-center font-bold uppercase">
        We&apos;ve Covered <span className="text-tertiary">650+</span> Subjects
      </h2>
      <p className="text-[#5A5A5A] text-center text-sm py-2">
        We have built a team who with their distinct expertise creates diversity in academic disciplines
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-2">
        {subjects.map((subject) => {
             const whatsappUrl = `https://wa.me/447397145697?text=${encodeURIComponent(
            `Hello Team Academians, I need help with ${subject.name}.`
              )}`;
              return (
                <a key={subject.id} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <div
                
                className="bg-white md:w-[200px] w-full h-16 rounded-md shadow-lg"
              >
                <div className="flex items-center gap-2 px-2 py-2">
                  <div><div className="bg-[#007285] w-10 h-10 rounded-full flex justify-center items-center">
                  {subject.icon}
                  </div></div>
                  <h1 className="font-semibold">{subject.name}</h1>
                </div>
              </div>
              </a>
              );
})}
      </div>
    </div>
  );
};

export default SubjectsCard;
