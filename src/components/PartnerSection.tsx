import { FunctionComponent } from "react";
import {
  ArticulosYCatalogacion,
  MDI,
  OnOca,
  SRN,
  Scraping,
  Text,
  Unify,
} from "@cencosud/parallel";
import styles from "./PartnerSection.module.css";

const PartnerSection: FunctionComponent = () => {
  return (
    <div className={styles.partnerSection}>
      <Text className={styles.rectangle} />
      <div className={styles.rectangleParent}>
        <OnOca logoType />
        <Scraping logoType />
        <Unify logoType />
        <SRN logoType />
        <ArticulosYCatalogacion logoType />
        <MDI logoType />
      </div>
    </div>
  );
};

export default PartnerSection;
