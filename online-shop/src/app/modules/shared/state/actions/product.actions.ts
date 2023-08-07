import { createAction, props } from "@ngrx/store";
import { Product, ProductInsert } from "../../types/products.types";

export enum ProductActions {
    addProduct = '[Product] Add Product',
    addProductSuccess = '[Product] Add Product Success',
    addProductFailure = '[Product] Add Product Failure',
    getProduct = '[Product] Get product',
    getProductSuccess = '[Product] Get Product Success',
    getProductFailure = '[Product] Get Product Failure',
    updateProduct = '[Product] Update product',
    updateProductSuccess = '[Product] Update Product Success',
    updateProductFailure = '[Product] Update Product Failure',
    deleteProduct = '[Product] Delete product',
    deleteProductSuccess = '[Product] Delete Product Success',
    deleteProductFailure = '[Product] Delete Product Failure'
}

export const addProduct = createAction(
    ProductActions.addProduct,
    props<{ product: ProductInsert }>()
);
export const addProductSuccess = createAction(
    ProductActions.addProductSuccess,
    props<{ product: Product }>()
);
export const addProductFailure = createAction(
    ProductActions.addProductFailure,
    props<{ error: string }>()
);

export const getProduct = createAction(
    ProductActions.getProduct,
    props<{ productId: string }>()
);
export const getProductSuccess = createAction(
    ProductActions.getProductSuccess,
    props<{ product: Product }>()
);
export const getProductFailure = createAction(
    ProductActions.getProductFailure,
    props<{ error: string }>()
);

export const updateProduct = createAction(
    ProductActions.updateProduct,
    props<{ product: Product }>()
);
export const updateProductSuccess = createAction(
    ProductActions.updateProductSuccess
);
export const updateProductFailure = createAction(
    ProductActions.updateProductFailure,
    props<{ error: string }>()
);

export const deleteProduct = createAction(
    ProductActions.deleteProduct,
    props<{ productId: string }>()
);
export const deleteProductSuccess = createAction(
    ProductActions.deleteProductSuccess
);
export const deleteProductFailure = createAction(
    ProductActions.deleteProductFailure,
    props<{ error: string }>()
);