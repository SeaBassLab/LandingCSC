import { FunctionComponent } from "react";
import ParallelCard from "./ParallelCard";
import styles from "./ProyectCardsContainer.module.css";

const ProyectCardsContainer: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <ParallelCard />
      <ParallelCard />
      <ParallelCard />
      <ParallelCard />
      <ParallelCard />
      <ParallelCard />
    </div>
  );
};

export default ProyectCardsContainer;
