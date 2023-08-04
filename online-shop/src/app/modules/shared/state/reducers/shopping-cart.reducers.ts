import { createReducer, on } from "@ngrx/store";
import { addToCart, createOrder, createOrderFailure, createOrderSuccess } from "../actions/shopping-cart.actions";
import { initialShoppingCartState } from "../state/shopping-card.state";

export const shoppingCartReducer = createReducer(
    initialShoppingCartState,

    on(addToCart, (state, { product }) => {
        const productOrder = state.products.find(x => x.id === product.id);
        if (productOrder === undefined) {
            return {
                ...state,
                products: [...state.products, product],
                error: "",
            };
        } else {
            return {
                ...state
            };
        }
    }),

    on(createOrder, (state) => ({
        ...state,
    })),

    on(createOrderSuccess, (state) => ({
        ...state,
        products: [],
        error: "",
    })),

    on(createOrderFailure, (state) => ({
        ...state,
        error: "",
    }))
);