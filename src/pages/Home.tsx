import { FunctionComponent } from "react";
import ParallelNavbar from "../components/ParallelNavbar";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const Home: FunctionComponent = () => {
  return (
    <div className="relative bg-base-white w-full flex flex-col items-center justify-start">
      <ParallelNavbar />
      <Hero />
      <img
        className="w-[1280px] relative h-20"
        alt=""
        src="/navbar-container.svg"
      />
      <Main />
      <img
        className="w-[1280px] relative h-20 object-contain"
        alt=""
        src="/navbar-container1.svg"
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
