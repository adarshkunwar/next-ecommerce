import { Product } from "@/types/Product";
import React from "react";

type Props = {
  product: Pick<Product, "description">;
};

const ProductDescription = ({ product }: Props) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Description</h2>
      <p className="text-gray-500">{product.description}</p>
    </section>
  );
};

export default ProductDescription;
