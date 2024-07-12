import Layout from "@/components/shared-components/Layout";
import { generate_data } from "@/data/product_builder";
import React from "react";
import NotFound from "./not-found";
import { Product } from "@/types/Product";
import ProductHero from "@/components/single-product-page/product-hero";
import ProductDescription from "@/components/single-product-page/product-description";
import ProductReviews from "@/components/single-product-page/product-reviews";
import SimilarPRoduct from "@/components/shared-components/similar-product";

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
      <div className="mt-10 container">
        <ProductHero product={product} />
        <ProductDescription product={product} />
        <ProductReviews product={product} />
        <SimilarPRoduct />
      </div>
    </Layout>
  );
};

export default SingleProductPage;
