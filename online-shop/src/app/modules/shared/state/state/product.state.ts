import { Product } from "../../types/products.types";

export interface ProductState {
    currentProduct: Product | null;
    error: string;
}

export const initialProductState: ProductState = {
    currentProduct: null,
    error: ''
}