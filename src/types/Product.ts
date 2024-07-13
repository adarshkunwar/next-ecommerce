import { Treview } from "./Review";
import { Category } from "./categories";

export interface Product {
  id: string;
  name: string;
  description: string;
  stars: number;
  discount: number;
  unit: string;
  price: number;
  category: Category;
  image: string[];
  quantity: number;
  reviews: Treview[];
}
