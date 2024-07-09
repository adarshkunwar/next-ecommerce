import { Product } from "@/types/Product";

const randomName = ["num1", "num2", "Num3", "num4"];
const randomPrice = ["10", "20", "40", "20"];

const generate_data = (Num: number) => {
  let jsonArray: Product[] = [];

  for (let i = 0; i < Num; i++) {
    let temp: Product = {
      id: i.toString(),
      name: randomName[Math.floor(Math.random() * randomName.length)],
      description: "description",
      discount: Math.floor(Math.random() * 10),
      price: parseInt(
        randomPrice[Math.floor(Math.random() * randomPrice.length)]
      ),
      category: {
        name: "name",
        imageUrl: "imageUrl",
      },
      image: ["image"],
      quanity: Math.floor(Math.random() * 10),
      reviews: [
        {
          id: "1",
          name: "name",
          review: "review",
          rating: Math.floor(Math.random() * 5),
        },
      ],
    };
    jsonArray.push(temp);
  }

  return jsonArray;
};

export { generate_data };
