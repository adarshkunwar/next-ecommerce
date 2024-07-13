"use client";
import { Product } from "@/types/Product";
import { generate_data } from "@/data/product_builder";
import SingleCardItem from "./product-card-item";
import { useEffect, useState } from "react";

type props = {
  size: number
}

const ProductList = ({ size }: props) => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    setData(generate_data(2));
  }, []);

  return (
    <div className={`grid ${size === 4 ? `grid-cols-4` : `grid-cols-3`} gap-5 pt-6`}>
      {(data as Product[]).map((product, index) => (
        <div>
          <SingleCardItem product={product} key={index} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
