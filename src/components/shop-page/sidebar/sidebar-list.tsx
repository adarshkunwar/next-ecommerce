import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SideBarListProps, SideBarSingleItem } from "@/types/sidebar";
import { SingleCheckBox } from "./sidebar-item";

const SideBarList = ({ heading, content }: SideBarListProps) => {
  return (
    <AccordionItem value={heading}>
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
