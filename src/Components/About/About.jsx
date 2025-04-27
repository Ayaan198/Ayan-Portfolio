import AboutImg from "../../assets/about.png";
import { IoArrowForwardCircle } from "react-icons/io5";
import {TiArrowForwardOutline } from "react-icons/ti";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="pl-12 pb-6 text-2xl md:text-4xl font-bold flex justify-center items-center gap-1">About Me <TiArrowForwardOutline /></h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 mr-20 rounded-2xl" src={AboutImg} alt="About img" />

          <ul>
          <div className="flex gap-3 py-4">
              <IoArrowForwardCircle size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Java Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I build robust, scalable backend systems using Java, Spring Boot, and REST APIs — focused on clean architecture and performance.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForwardCircle size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Hands-on experience in React, Tailwind CSS, and JavaScript. Currently exploring performance optimization & animation techniques.
                </p>
              </span>
            </div>
            
            <div className="flex gap-3 py-4">
              <IoArrowForwardCircle size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  SQL Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I design and optimize databases, write efficient queries, and ensure clean, reliable data structures for real-world apps.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
