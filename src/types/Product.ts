import { Category } from "./categories";

export interface Product {
    id : string;
    name : string;
    description : string;
    discount: number;
    price : number;
    category : Category;
    image : string[];
    quanity : number;
    reviews: [
        {
            id : string;
            name : string;
            review : string;
            rating : number;
        }
    ]
    
}