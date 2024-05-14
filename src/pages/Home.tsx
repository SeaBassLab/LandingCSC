import { FunctionComponent } from "react";
import ParallelNavbar from "../components/ParallelNavbar";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <ParallelNavbar />
      <Hero />
      <img
        className={styles.styleddivrightIcon}
        alt=""
        src="/navbar-container.svg"
      />
      <Main />
      <img
        className={styles.styleddivleftIcon}
        alt=""
        src="/navbar-container1.svg"
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
