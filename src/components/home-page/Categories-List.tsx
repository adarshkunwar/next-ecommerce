import CategoryData from "@/data/categories.json";
import SingleCardItem from "./single-card-item";
import { Category } from "@/types/categories";
const CategoryList = () => {
  return (
    <div className="grid grid-cols-6 gap-5 pt-6">
      {(CategoryData as Category[]).map((category, index) => (
        <div>
          <SingleCardItem category={category} />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
