"use client";
import { Product } from "@/types/Product";
import { getDiscountedPrice } from "@/utils/getDiscrounted";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaStarHalf, FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { Input } from "../ui/input";
import RatingStars from "../shared-components/RatingStars";
import QuantityInput from "./quantity-input";

type Props = {
  product: Product;
};

const ProductHero = ({ product }: Props) => {
  const [primaryImage, setPrimaryImage] = useState(1);

  const changeImage = (i: number) => {
    setPrimaryImage(i);
  };

  const renderStars = () => {
    let stars = [];
    let tempStars = product.stars;
    while (tempStars > 1) {
      stars.push(<FaStar />);
      tempStars--;
    }
    if (tempStars > 0) {
      stars.push(<FaStarHalf />);
    }
    return stars;
  };

  const discountedPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <div className="grid grid-cols-5 container gap-3">
      <section className="col-span-2">
        <figure>
          <div>
            <div className="flex aspect-video items-center justify-center p-2 w-full h-full">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full rounded-lg object-cover"
                src={product.image[primaryImage]}
                alt={product.name}
              />
            </div>
          </div>
        </figure>
        <section className="grid grid-cols-4">
          {product.image.map((image, index) => {
            return (
              <div
                className="aspect-video p-2 w-[1/3]"
                key={index}
                onMouseEnter={() => changeImage(index)}
              >
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-full rounded-lg object-cover"
                  src={image}
                  alt={product.name}
                />
              </div>
            );
          })}
        </section>
      </section>

      <section className="col-span-2 flex flex-col gap-4">
        <section>
          <h1 className="text-xl">{product.name}</h1>
          <section className="flex items-center justify-normal py-2">
            <RatingStars rating={product.stars} />
            <h4 className="text-sm">{product.reviews.length} reviews</h4>
          </section>
          <div className="flex text-3xl">
            <h2>{product.unit}</h2>
            <h3>{discountedPrice}</h3>
          </div>
          <div className="flex">
            <div className="flex line-through text-muted-foreground">
              <h2>{product.unit}</h2>
              <h3>{product.price}</h3>
            </div>
            <h4>&nbsp;&nbsp;&nbsp;-{product.discount}%</h4>
          </div>
        </section>
        <section>
          <QuantityInput />
        </section>
        <section className="flex gap-2">
          <Button variant={"outline"} className="w-44">
            Add to cart
          </Button>
          <Button variant={"default"} className="w-44">
            Buy now
          </Button>
        </section>
      </section>
    </div>
  );
};

export default ProductHero;
