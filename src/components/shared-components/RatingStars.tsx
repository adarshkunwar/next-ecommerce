import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

type Props = {
  rating: number;
};

const TOTAL_STARS = 5;

const RatingStars = ({ rating }: Props) => {
  const fullStar = Math.floor(rating);
  const halfFilledStar = rating - fullStar > 0.5 ? 1 : 0;
  const emptyStar = 5 - fullStar - halfFilledStar;
  return (
    <div className="flex">
      {Array(fullStar)
        .fill("_")
        .map((_, index) => (
          <FaStar key={index} />
        ))}
      {Array(halfFilledStar)
        .fill("_")
        .map((_, index) => (
          <FaStarHalfStroke key={index} />
        ))}
      {Array(emptyStar)
        .fill("_")
        .map((_, index) => (
          <FaRegStar key={index} />
        ))}
    </div>
  );
};

export default RatingStars;
