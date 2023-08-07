import { Product } from "../../types/products.types";

export interface ShoppingCartState {
    products: Product[];
    error: string,
}

export const initialShoppingCartState: ShoppingCartState = {
    products: [],
    error: "",
};