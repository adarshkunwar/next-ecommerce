import React from "react";
import ProductList from "./product/Product-List";

type Props = {};

const SimilarPRoduct = (props: Props) => {
  return (
    <div>
      <h2>You may also like</h2>
      <ProductList size={4} />
    </div>
  );
};

export default SimilarPRoduct;
