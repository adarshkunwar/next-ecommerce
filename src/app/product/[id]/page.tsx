import Layout from "@/components/shared-components/Layout";
import { generate_data } from "@/data/product_builder";
import React from "react";
import NotFound from "./not-found";
import { Product } from "@/types/Product";
import ProductHero from "@/components/single-product-page/product-hero";

type Props = {
  params: {
    id: string;
  };
  //   searchParams: { query: string; page: string };
};

const SingleProductPage = ({ params: { id } }: Props) => {
  const product = (generate_data(10) as Product[]).find(
    (product) => product.id === id
  );

  if (product === undefined) return NotFound();
  return (
    <Layout>
      <div className="mt-10">
        <ProductHero product={product} />
      </div>
    </Layout>
  );
};

export default SingleProductPage;
