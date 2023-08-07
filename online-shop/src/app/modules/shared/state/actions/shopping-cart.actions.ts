import { createAction, props } from "@ngrx/store";
import { Order, Product } from "../../types/products.types";

export enum ShoppingCartActions {
    addToCart = '[Product] Add Product To Cart',
    createOrder = '[Order] Create Order',
    createOrderSuccess = '[Order] Create Order Success',
    createOrderFailure = '[Order] Create Order Failure'
}

export const addToCart = createAction(
    ShoppingCartActions.addToCart,
    props<{ product: Product }>()
);

export const createOrder = createAction(
    ShoppingCartActions.createOrder,
    props<{ order: Order }>()
);

export const createOrderSuccess = createAction(
    ShoppingCartActions.createOrderSuccess
);

export const createOrderFailure = createAction(
    ShoppingCartActions.createOrderFailure,
    props<{ error: string }>()
);