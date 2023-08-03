import { createReducer, on } from "@ngrx/store";
import {
    addProduct, addProductFailure, addProductSuccess,
    deleteProduct, deleteProductFailure, deleteProductSuccess,
    getProduct,
    getProductFailure,
    getProductSuccess,
    updateProduct, updateProductFailure,
    updateProductSuccess
} from "../actions/product.actions";
import { initialProductState } from "../state/product.state";

export const productReducer = createReducer(
    initialProductState,

    on(getProduct, (state) => ({
        ...state,
    })),

    on(getProductSuccess, (state, { product }) => ({
        ...state,
        currentProduct: product,
        error: '',
    })),

    on(getProductFailure, (state) => ({
        ...state,
        error: '',
    })),

    on(updateProduct, (state) => ({
        ...state,
        status: "loading"
    })),

    on(updateProductSuccess, (state) => ({
        ...state,
        currentProduct: null,
        error: '',
    })),

    on(updateProductFailure, (state) => ({
        ...state,
        error: '',
    })),

    on(deleteProduct, (state) => ({
        ...state,
    })),

    on(deleteProductSuccess, (state) => ({
        ...state,
        currentProduct: null,
        error: '',
    })),

    on(deleteProductFailure, (state) => ({
        ...state,
        error: '',
    })),

    on(addProduct, (state) => ({
        ...state,
    })),

    on(addProductFailure, (state) => ({
        ...state,
        error: '',
    })),

    on(addProductSuccess, (state) => ({
        ...state,
        currentProduct: null,
        error: '',
    })),
);