import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SideBarListProps, SideBarSingleItem } from "@/types/sidebar";
import { SingleCheckBox } from "./sidebar-item";

const SideBarList = ({ heading, content }: SideBarListProps) => {
  return (
    <AccordionItem
      value={heading}
      className="bg-gray-300 px-4 py-2 rounded-xl my-1"
    >
      <AccordionTrigger>{heading}</AccordionTrigger>
      <AccordionContent>
        {(content as SideBarSingleItem[]).map((item, index) => {
          return (
            <div key={index} className="my-1">
              <SingleCheckBox isTrue={item.isTrue} content={item.content} />
            </div>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};

export default SideBarList;
