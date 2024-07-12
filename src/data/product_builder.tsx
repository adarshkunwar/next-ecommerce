import { Product } from "@/types/Product";
import { Treview } from "@/types/Review";

const randomName = ["num1", "num2", "Num3", "num4"];
const randomPrice = ["10", "20", "40", "20"];
const randomImages = [
  " https://plus.unsplash.com/premium_photo-1720188548640-3c5602bb7832?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719356441313-6cb150b99318?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1717919300498-a62b4a78d5cf?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1720526578655-49b064b5a16a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const generateName = (syllablesCount: number) => {
  const syllables = [
    "pro",
    "tech",
    "auto",
    "tron",
    "gen",
    "flex",
    "nova",
    "mega",
    "prime",
    "ultra",
    "quant",
    "sys",
    "logic",
    "cyber",
    "dyn",
    "max",
    "core",
    "lite",
    "eco",
    "neo",
  ];

  let name = "";
  for (let i = 0; i < syllablesCount; i++) {
    const randomIndex = Math.floor(Math.random() * syllables.length);
    name += syllables[randomIndex] + " ";
  }
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return name;
};

const generateImages = (num: number) => {
  let images: string[] = [];
  for (let i = 0; i < num; i++) {
    images.push(randomImages[Math.floor(Math.random() * randomImages.length)]);
  }
  return images;
};

const generate_data = (Num: number) => {
  let jsonArray: Product[] = [];

  for (let i = 0; i < Num; i++) {
    let temp: Product = {
      id: i.toString(),
      name: generateName(25),
      stars: Math.random() * 5,
      description: generateName(500),
      discount: Math.floor(Math.random() * 10),
      unit: "Rs.",
      price: parseInt(
        randomPrice[Math.floor(Math.random() * randomPrice.length)]
      ),
      category: {
        name: "name",
        imageUrl:
          "https://images.unsplash.com/photo-1719356441313-6cb150b99318?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      image: generateImages(Math.floor(Math.random() * 5 + 1)),
      quanity: Math.floor(Math.random() * 10),
      reviews: [
        {
          id: "1",
          name: "name",
          review: "review",
          rating: Math.floor(Math.random() * 5),
        },
        {
          id: "1",
          name: "name",
          review: "review",
          rating: Math.floor(Math.random() * 5),
        },
        {
          id: "1",
          name: "name",
          review: "review",
          rating: Math.floor(Math.random() * 5),
        },
        {
          id: "1",
          name: "name",
          review: "review",
          rating: Math.floor(Math.random() * 5),
        },
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
