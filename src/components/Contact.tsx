import { FunctionComponent } from "react";
import ContactHeading from "./ContactHeading";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

const Contact: FunctionComponent = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <ContactHeading />
        <ContactForm />
        <img
          className={styles.containerChild}
          alt=""
          src="/group-269792-1@2x.png"
        />
        <img
          className={styles.containerItem}
          alt=""
          src="/group-269793-1.svg"
        />
      </div>
    </div>
  );
};

export default Contact;
