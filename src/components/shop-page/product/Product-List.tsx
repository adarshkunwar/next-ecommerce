"use client";
import { Product } from "@/types/Product";
import { generate_data } from "@/data/product_builder"
import SingleCardItem from "./product-card-item";
import { useEffect, useState } from "react";
const ProductList = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    setData(generate_data(2));
  }, []);

  return (
    <div className="grid grid-cols-6 gap-5 pt-6">
      {(data as Product[]).map((product, index) => (
        <SingleCardItem product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
