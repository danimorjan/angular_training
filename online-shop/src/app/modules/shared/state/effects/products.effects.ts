import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { getProducts, getProductsFailure, getProductsSucces } from '../actions/products.actions';

@Injectable()
export class ProductsEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductsService
    ) {
    }

    getProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getProducts),
            switchMap(() =>
                this.productService.getProducts().pipe(
                    map((products) => getProductsSucces({ products: products })),
                    catchError((error) => of(getProductsFailure({ error })))
                )
            )
        )
    );

    getProductsFailure$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(getProductsFailure),
                tap((err) => alert(err.error))
            ),
        { dispatch: false }
    );
}