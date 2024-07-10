import { Treview } from "./Review";
import { Category } from "./categories";

export interface Product {
    id : string;
    name : string;
    description : string;
    discount: number;
    unit: string;
    price : number;
    category : Category;
    image : string[];
    quanity : number;
    reviews:   Treview[]; 
    
}