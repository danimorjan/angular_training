import { createReducer, on } from "@ngrx/store";
import { getProducts, getProductsFailure, getProductsSucces } from "../actions/products.actions";
import { initialProductsState } from "../state/products.state";

export const productsReducer = createReducer(
    initialProductsState,
    on(getProducts, (state) => ({ ...state })),

    on(getProductsSucces, (state, { products }) => ({
        ...state,
        products: products,
        error: '',
    })),
    on(getProductsFailure, (state, { error }) => ({
        ...state,
        error: error,
    }))
)