"use client";
import { Product } from "@/types/Product";
import { generate_data } from "@/data/product_builder";
import SingleCardItem from "./product-card-item";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type props = {
  size: number
  length: number,
  variant?: 'filtered' | 'default'
}

const CATEGORY = 'Category';
const PRICE = 'Price';
const RATING = 'Rating';

const ProductList = ({ size, length, variant }: props) => {
  const searchParams = useSearchParams()
  const [data, setData] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>(data)
  const chosenCategory = searchParams.get(CATEGORY)
  const chosenPrice = searchParams.get(PRICE)
  const chosenRating = searchParams.get(RATING)


  useEffect(() => {
    setData(generate_data(length));
    if (chosenCategory) {
      setFilteredData(data.filter(data => data.category.name == chosenCategory))
    } else {
      setFilteredData(data)
    }
  }, [])

  useEffect(() => {
    if (chosenCategory) {
      setFilteredData(data.filter(data => data.category.name == chosenCategory))
    } else {
      setFilteredData(data)
    }
  }, [searchParams, data, chosenCategory]);

  return (
    <div className={`grid ${size === 4 ? `grid-cols-4` : `grid-cols-3`} gap-5 pt-6`}>
      {variant === 'filtered' ?
        (filteredData as Product[]).map((product, index) => (
          <SingleCardItem product={product} key={index} variant="category" />
        ))
        :
        (data as Product[]).map((product, index) => (
          <SingleCardItem product={product} key={index} />
        ))
      }
    </div>
  );
};

export default ProductList;
