import { FunctionComponent } from "react";
//TODO: Add Import for Storybook Text component
//TODO: Add Import for Storybook OnOca component
//TODO: Add Import for Storybook Scraping component
//TODO: Add Import for Storybook Unify component
//TODO: Add Import for Storybook SRN component
//TODO: Add Import for Storybook ArticulosYCatalogacion component
//TODO: Add Import for Storybook MDI component

const PartnerSection: FunctionComponent = () => {
  return (
    <div className="w-[1051px] flex flex-col items-center justify-center gap-[10px] z-[0]">
      <Text className="w-[300px] relative" className="" />
      <div className="self-stretch flex flex-row items-center justify-center py-6 px-0 gap-[16px]">
        <OnOca className="flex-1 relative" logoType />
        <Scraping className="flex-1 relative" logoType />
        <Unify className="flex-1 relative" logoType />
        <SRN className="flex-1 relative" logoType />
        <ArticulosYCatalogacion className="flex-1 relative" logoType />
        <MDI className="flex-1 relative" logoType />
      </div>
    </div>
  );
};

export default PartnerSection;
