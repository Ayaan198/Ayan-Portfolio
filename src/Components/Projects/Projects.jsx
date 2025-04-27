import ProjectCard from "./ProjectCard";
import { TiArrowForwardOutline } from "react-icons/ti";
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold flex justify-center items-center gap-1">My Projects <TiArrowForwardOutline /></h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="ChatBot Application"
          main="An AI-powered conversational interface designed to simulate human-like interactions. It assists users by answering queries, providing information, and enhancing customer support efficiency"
        />
        <ProjectCard
          title="Bank Management Application"
          main="A secure system designed to manage banking operations like account handling, transactions, and customer records. It streamlines financial services through an intuitive and efficient user interface"
        />
        <ProjectCard
          title="E-commerce Website"
          main="A user-friendly platform developed for seamless online shopping, featuring product browsing, cart management, and secure checkout. It ensures an efficient shopping experience for both customers and sellers"
        />
      </div>
    </div>
  );
};

export default Projects;
