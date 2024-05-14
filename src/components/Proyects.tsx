import { FunctionComponent } from "react";
import { Button } from "@cencosud/parallel";
import ProyectCardsContainer from "./ProyectCardsContainer";
import styles from "./Proyects.module.css";

const Proyects: FunctionComponent = () => {
  return (
    <div className={styles.proyects}>
      <ProyectCardsContainer />
      <Button
        className={styles.rectangle}
        hierarchy="secondary"
        label="Button"
      />
    </div>
  );
};

export default Proyects;
