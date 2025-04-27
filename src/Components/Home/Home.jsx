import profilePic from "../../assets/1742672053871.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-3/4 md:pr-15 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter min-h-[70px]">
          <TextChange />
        </h1>
        
        <p className="text-sm md:text-2xl tracking-tight">
          <ul>
          <li>

          I&apos;m 4th Year B.Tech Engineering Student &
          </li>
          <li>
          A Developer 🧑‍💻

          </li>
          </ul>
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <img width="78%"className=" ml-8 rounded-full" src={profilePic} alt="" />
      </div>
    </div>
  );
};

export default Home;
