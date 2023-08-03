import { AuthState } from "./auth.state";
import { ProductState } from "./product.state";
import { ProductsState } from "./products.state";
import { ShoppingCartState } from "./shopping-card.state";


export interface AppState {
    auth: AuthState;
    products: ProductsState;
    product: ProductState;
    shoppingCart: ShoppingCartState;
}