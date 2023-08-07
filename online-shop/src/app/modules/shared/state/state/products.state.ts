import { Product } from "../../types/products.types";

export interface ProductsState {
    products: Product[];
    error: string;
}

export const initialProductsState: ProductsState = {
    products: [],
    error: ''
}