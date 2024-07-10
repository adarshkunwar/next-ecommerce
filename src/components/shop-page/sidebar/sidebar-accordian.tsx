import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SideBarList from "./sidebar-list";
import { SideBarAccordianProps, SideBarListProps } from "@/types/sidebar";

export function SideBarAccordian({ content }: SideBarAccordianProps) {
  return (
    <Accordion type="multiple" className="w-full">
      {(content as SideBarListProps[]).map((item, index) => (
        <div key={index}>
          <SideBarList heading={item.heading} content={item.content} />
        </div>
      ))}
      {/* <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  );
}
