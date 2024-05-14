import { FunctionComponent } from "react";
import FooterContainer from "./FooterContainer";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <FooterContainer />
    </div>
  );
};

export default Footer;
