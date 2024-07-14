"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { SideBarSingleItem } from "@/types/sidebar";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";


export function SingleCheckBox({ isTrue, content, heading }: SideBarSingleItem) {
  const CHOSEN_CATEGORY = heading;
  const router = useRouter();
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const chosenCategory = searchParams.get(CHOSEN_CATEGORY ?? 'all')

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const isChosen = (chosenCategory === content ? true : false);

  const handleCheck = () => {
    router.push(
      pathName + "?" + createQueryString(CHOSEN_CATEGORY, content.toString())
    );
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" checked={isChosen} onClick={handleCheck} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {content}
      </label>
    </div>
  );
}
