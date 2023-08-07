import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { ShoppingCartState } from "../state/shopping-card.state";

export const selectOrderState = (state: AppState) => state.shoppingCart;

export const selectOrderProducts = createSelector(selectOrderState, (state: ShoppingCartState) => state.products);