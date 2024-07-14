import {
  Accordion,
} from "@/components/ui/accordion";
import SideBarList from "./sidebar-list";
import { SideBarAccordionProps, SideBarListProps } from "@/types/sidebar";

export function SideBarAccordion({ content }: SideBarAccordionProps) {
  return (
    <Accordion type="multiple" className="w-full">
      {(content as SideBarListProps[]).map((item, index) => (
        <div key={index}>
          <SideBarList heading={item.heading} content={item.content} />
        </div>
      ))}
    </Accordion>
  );
}
