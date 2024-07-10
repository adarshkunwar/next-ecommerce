"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { SideBarSingleItem } from "@/types/sidebar";
import { useState } from "react";

export function SingleCheckBox({ isTrue, content }: SideBarSingleItem) {
  const [isTrueS, setIsTrueS] = useState(isTrue);

  const handleCheck = () => {
    setIsTrueS(!isTrueS);
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" checked={isTrueS} onClick={handleCheck} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {content}
      </label>
    </div>
  );
}
