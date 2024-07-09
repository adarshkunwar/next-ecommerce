import CategoryData from "@/data/categories.json"
import { Category } from "@/types/categories";
const CategoryList = () => {
	return (
		<div>
			{(CategoryData as Category[]).map((category, index) => (
				<div>
					hi
				</div>
				)
			)}
		</div>
	)
}

export default CategoryList;
