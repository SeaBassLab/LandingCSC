import { FunctionComponent } from "react";
//TODO: Add Import for Storybook V component
import ProyectCardsContainer from "./ProyectCardsContainer";
import styles from "./Proyects.module.css";

const Proyects: FunctionComponent = () => {
  return (
    <div className={styles.proyects}>
      <ProyectCardsContainer />
      <V className={styles.rectangle} hierarchy="secondary" label="Button" />
    </div>
  );
};

export default Proyects;
