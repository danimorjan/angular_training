import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { ProductState } from "../state/product.state";

export const selectProductState = (state: AppState) => state.product;

export const selectCurrentProduct = createSelector(
    selectProductState,
    (state: ProductState) => state.currentProduct
);