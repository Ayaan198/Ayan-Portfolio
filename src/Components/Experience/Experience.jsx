
import { FaCss3, FaDatabase, FaHtml5, FaJs, FaReact } from "react-icons/fa";
// import { SiRedis } from "react-icons/si";
import qspidersLogo from "../../assets/qspiders-logo.png"
import { DiJava } from "react-icons/di";

import { TiArrowForwardOutline } from "react-icons/ti";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold flex justify-center items-center gap-1">Skills & Experience <TiArrowForwardOutline />
      </h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          
          
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaDatabase color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiJava color="#FF4438" size={50} />
          </span>
        </div>
        

<div>
  <div className="flex gap-8 bg-slate-950 bg-opacity-45 mt-2 rounded-lg  p-4  items-center h-35 w-3/4">
    <img src={qspidersLogo} alt="" className="w-14 h-14 rounded-xl ml-10" /> 
    <span className="text-white font-bold">
      <h2 className="leading-tight">Java Full Stack Intern, QSpiders</h2>
      <p className="text-sm leading-tight font-thin">
        Dec 2, 2024 - Apr 15, 2025
      </p>
      <ul className="text-sm p-3">
        <li>- Worked with core Java, Spring Boot, Hibernate and MySQL</li>
        <li>- Worked on JavaScript and basic Front-End Technologies</li>
      </ul>
    </span>
  </div>
</div>

      </div>
    </div>
  );
};

export default Experience;
