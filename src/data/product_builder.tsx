import CategoryData from "./categories.json"
import { Product } from "@/types/Product";
import { Treview } from "@/types/Review";

const CHOSEN_NAME = "Essager 240W USB Type C To USB C Cable 100W PD 3.1 Fast Charging Charger Wire For iPhone 15 Pro max Macbook Pro Xiaomi Samsung"

const CHOSEN_DESC = " Essager USB C to USB Type C cable supports 240W / 100W / 30W fast charging and can be used to charge laptops / tablets / mobile phones. 480Mbps fast data transfer. Smart LED display. strong and sturdy. Things to know before buying: Brand: Essager Interface: USB - C to Type - C Color: gray Material: aluminum alloy + 24 braided PP yarn Power: Support 240W PD3.1, backward compatible with PD140W, 100W, 65W, 45W, 30W, etc. Transmission rate: USB2.0 480Mbps Input interface: USB - C Output interface: Type - C "

const randomImages = [
  " https://plus.unsplash.com/premium_photo-1720188548640-3c5602bb7832?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719356441313-6cb150b99318?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1717919300498-a62b4a78d5cf?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1720526578655-49b064b5a16a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const fake_review: Treview = {
  "id": "1",
  "name": "abc",
  "rating": 10,
  "review": "123",
}

const generateRandomNumber = (min: number, max: number) => {
  const randomNumber = Math.random() * (max - min) + min
  return randomNumber
}

const generateRandomImages = (num: number): string[] => {
  let result = []
  for (let i = 0; i < num; i++) {
    result.push(randomImages[Math.floor(generateRandomNumber(1, randomImages.length))])
  }
  return result
}

const generate_review = (num: number): Treview[] => {
  let result: Treview[] = []
  for (let i = 0; i < num; i++) {
    let temp = { ...fake_review };
    temp.id = i.toString();
    temp.rating = generateRandomNumber(2, 5)
    result.push(temp);
  }
  return result
}

const generate_data = (num: number): Product[] => {
  let result: Product[] = []
  for (let i = 0; i < num; i++) {
    let temp = {
      "id": i.toString(),
      "name": CHOSEN_NAME,
      "unit": "Rs",
      "image": generateRandomImages(Math.floor(generateRandomNumber(1, 4))),
      "price": Math.floor(generateRandomNumber(500, 1000)),
      "stars": generateRandomNumber(1, 5),
      "quantity": generateRandomNumber(1, 20),
      "reviews": generate_review(generateRandomNumber(1, 10)),
      "discount": Math.floor(generateRandomNumber(5, 70)),
      "description": CHOSEN_DESC,
      "category": CategoryData[generateRandomNumber(1, CategoryData.length)]
    };
    result.push(temp);
  }
  return result
}

export { generate_data }
