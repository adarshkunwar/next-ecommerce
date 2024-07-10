"use client";
import { Product } from "@/types/Product";
import { generate_data } from "@/data/product_builder";
import SingleCardItem from "./product-card-item";
import { useEffect, useState } from "react";
const ProductList = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    setData(generate_data(200));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5 pt-6">
      {(data as Product[]).map((product, index) => (
        <div>
          <SingleCardItem product={product} key={index} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
