import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#280B45] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold mr-20 flex items-center gap-2">My Contact<IoArrowForwardCircle /></h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          ayanbate22@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/ayaan198/">
          linkdlin.com/Ayaan198
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/Ayaan198">
          github.com/Ayaan198
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
