import { Product } from "@/types/Product";
import React from "react";
import RatingStars from "../shared-components/RatingStars";
import { Separator } from "@/components/ui/separator";

type Props = {
  product: Pick<Product, "reviews">;
};

const ProductReviews = ({ product }: Props) => {
  return (
    <section className="mt-12">
      <h2>What Customers think about our product</h2>
      {product.reviews.length > 0 ? (
        <ReviewList product={product} />
      ) : (
        <p>No reviews yet</p>
      )}
    </section>
  );
};

const ReviewList = ({
  product: { reviews },
}: {
  product: Pick<Product, "reviews">;
}) => {
  return (
    <div>
      {reviews.map((review, index) => {
        return (
          <div key={index} className="flex gap-2 mt-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div>
              <h3 className="font-semibold">{review.name}</h3>
              <RatingStars rating={review.rating} />
              <p className="text-gray-500">{review.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductReviews;
