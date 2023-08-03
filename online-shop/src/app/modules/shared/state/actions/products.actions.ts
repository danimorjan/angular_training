import { createAction, props } from "@ngrx/store";
import { Product } from "../../types/products.types";

export enum ProductsActions {
    getProducts = '[Product] Get Products',
    getProductsSucces = '[Product] Get Products Succes',
    getProductsFailure = '[Product] Get Products Failure'
}

export const getProducts = createAction(
    ProductsActions.getProducts
);

export const getProductsSucces = createAction(
    ProductsActions.getProductsSucces,
    props<{ products: Product[] }>()
);

export const getProductsFailure = createAction(
    ProductsActions.getProductsFailure,
    props<{ error: string }>()
);