import { FunctionComponent } from "react";
//TODO: Add Import for Storybook Text component
//TODO: Add Import for Storybook OnOca component
//TODO: Add Import for Storybook Scraping component
//TODO: Add Import for Storybook Unify component
//TODO: Add Import for Storybook SRN component
//TODO: Add Import for Storybook ArticulosYCatalogacion component
//TODO: Add Import for Storybook MDI component
import styles from "./PartnerSection.module.css";

const PartnerSection: FunctionComponent = () => {
  return (
    <div className={styles.partnerSection}>
      <Text className={styles.rectangle} className="" />
      <div className={styles.rectangleParent}>
        <OnOca className={styles.rectangle1} logoType />
        <Scraping className={styles.rectangle1} logoType />
        <Unify className={styles.rectangle1} logoType />
        <SRN className={styles.rectangle1} logoType />
        <ArticulosYCatalogacion className={styles.rectangle1} logoType />
        <MDI className={styles.rectangle1} logoType />
      </div>
    </div>
  );
};

export default PartnerSection;
