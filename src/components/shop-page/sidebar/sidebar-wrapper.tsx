import { SideBarAccordian } from "./sidebar-accordian";
import SideBarData from "@/data/sidebar.json";

const SideBarWrapper = () => {
  return (
    <div>
      <div> 178 Experience </div>

      <div className="flex justify-between">
        <div>Filter: </div>
        <div>Clear Filter</div>
      </div>
      <div>
        <SideBarAccordian content={SideBarData} />
      </div>
    </div>
  );
};

export default SideBarWrapper;
