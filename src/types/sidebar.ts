export type SideBarSingleItem = {
    isTrue: boolean;
    content: string;
};

export type SideBarListProps = {
    heading: string;
    content: SideBarSingleItem[];
};

export type SideBarAccordionProps = {
    content: SideBarListProps[];
};
