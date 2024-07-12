"use client";
import React, { useCallback } from "react";
import { Button } from "../ui/button";
import { FaMinus, FaPlus } from "react-icons/fa";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {};
export const SELECTED_QUANTITY = "quantity";
const QuantityInput = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.push(
      pathName + "?" + createQueryString(SELECTED_QUANTITY, e.target.value)
    );
  };

  return (
    <section className="flex gap-2">
      <Button variant={"default"}>
        <FaMinus />
      </Button>
      <input
        type="number"
        min={1}
        max={10}
        step={1}
        value={searchParams.get(SELECTED_QUANTITY) ?? 1}
        onChange={handleClick}
      />
      <Button variant={"default"}>
        <FaPlus />
      </Button>
    </section>
  );
};

export default QuantityInput;
