"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { SideBarSingleItem } from "@/types/sidebar";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

export const CHOSEN_CATEGORY = "category"

export function SingleCheckBox({ isTrue, content }: SideBarSingleItem) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const chosenCategory = Number(searchParams.get(CHOSEN_CATEGORY ?? 'all'))


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
