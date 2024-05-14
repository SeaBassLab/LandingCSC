import { FunctionComponent } from "react";
import HeroSectionHeader from "./HeroSectionHeader";
import PartnerSection from "./PartnerSection";
import styles from "./Hero.module.css";

const Hero: FunctionComponent = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.heroChild} alt="" src="/group-2697922@2x.png" />
      <img className={styles.heroItem} alt="" src="/group-2697932@2x.png" />
      <HeroSectionHeader />
      <PartnerSection />
    </div>
  );
};

export default Hero;
