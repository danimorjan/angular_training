import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

export enum AppPaths {
    ROOT = '',
    LOGIN = 'login',
    PRODUCTS = 'products',
    PRODUCT_DETAILS = 'product/:id',
    SHOPPING_CART = 'shopping-cart',
    EDIT_PRODUCT = 'edit-product/:id',
    ADD_PRODUCT = 'add-product',
}

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    constructor(private router: Router) { }

    navigateToRoot() {
        this.router.navigate([`/${AppPaths.ROOT}`]);
    }

    navigateToLogin() {
        this.router.navigate([`/${AppPaths.LOGIN}`]);
    }

    navigateToProducts() {
        this.router.navigate([`/${AppPaths.ROOT}/${AppPaths.PRODUCTS}`]);
    }

    navigateToProductDetails(id: string) {
        this.router.navigate([`/${AppPaths.ROOT}/${AppPaths.PRODUCT_DETAILS.replace(':id', id)}`]);
    }

    navigateToShoppingCart() {
        this.router.navigate([`/${AppPaths.ROOT}/${AppPaths.SHOPPING_CART}`]);
    }

    navigateToEditProduct(id: string) {
        this.router.navigate([`/${AppPaths.ROOT}/${AppPaths.EDIT_PRODUCT.replace(':id', id)}`]);
    }

    navigateToAddProduct() {
        this.router.navigate([`/${AppPaths.ROOT}/${AppPaths.ADD_PRODUCT}`]);
    }
}