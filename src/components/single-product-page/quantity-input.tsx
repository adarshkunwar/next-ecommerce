"use client";
import React, { useCallback } from "react";
import { Button } from "../ui/button";
import { FaMinus, FaPlus } from "react-icons/fa";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {};

export const SELECTED_QUANTITY = "quantity";
const DEFAULT_QUANTITY = 1;
const MAX_QUANTITY = 10;
const MIN_QUANTITY = 1;

const QuantityInput = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const passedQuantity = Number(searchParams.get(SELECTED_QUANTITY) ?? 1);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const controlQuantity = (value: number) => {
    if (value > MAX_QUANTITY) {
      return MAX_QUANTITY;
    }
    if (value < MIN_QUANTITY) {
      return MIN_QUANTITY;
    }
    return value;
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = controlQuantity(e.target.valueAsNumber);
    router.push(
      pathName + "?" + createQueryString(SELECTED_QUANTITY, data.toString())
    );
  };

  const handleButtonPress = (value: number) => {
    const data = controlQuantity(value);
    router.push(
      pathName + "?" + createQueryString(SELECTED_QUANTITY, data.toString())
    );
  };

  return (
    <section className="flex gap-2">
      <Button
        variant={"default"}
        onClick={() => handleButtonPress(passedQuantity + 1)}
      >
        <FaMinus />
      </Button>
      <input
        type="number"
        min={1}
        max={10}
        step={1}
        value={passedQuantity}
        onChange={handleClick}
      />
      <Button
        variant={"default"}
        onClick={() => handleButtonPress(passedQuantity + 1)}
      >
        <FaPlus />
      </Button>
    </section>
  );
};

export default QuantityInput;
