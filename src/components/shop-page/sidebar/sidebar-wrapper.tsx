import { SideBarAccordion } from "./sidebar-accordion";
import SideBarData from "@/data/sidebar";

const SideBarWrapper = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>Filter: </div>
        <div>Clear Filter</div>
      </div>
      <div>
        <SideBarAccordion content={SideBarData} />
      </div>
    </div>
  );
};

export default SideBarWrapper;
