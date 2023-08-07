import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, tap } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../types/products.types';
import {
    addProduct,
    addProductFailure,
    addProductSuccess,
    deleteProduct,
    deleteProductFailure,
    deleteProductSuccess,
    getProduct,
    getProductFailure,
    getProductSuccess,
    updateProduct,
    updateProductFailure,
    updateProductSuccess
} from '../actions/product.actions';

@Injectable()
export class ProductEffects {
    constructor(
        private productsService: ProductsService,
        private actions$: Actions,
        private location: Location,
    ) {
    }

    addProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addProduct),
            switchMap((props) =>
                this.productsService.insertProduct(props.product).pipe(
                    map((product) => addProductSuccess({ product: product })),
                    catchError((err) => of(addProductFailure({ error: err })))
                )
            )
        )
    );

    addProductSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(addProductSuccess),
                tap(({ product: product }) => {
                    alert(`Product added`);
                    this.location.back();
                })
            ),
        { dispatch: false }
    );

    addProductFailure$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(addProductFailure),
                tap((err) => alert(err.error))
            ),
        { dispatch: false }
    );

    getProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getProduct),
            switchMap((props) =>
                this.productsService.getProductById(props.productId).pipe(
                    map((product: Product) => getProductSuccess({ product: product })),
                    catchError((err) => of(getProductFailure({ error: err })))
                )
            )
        )
    );

    updateProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateProduct),
            switchMap((props) =>
                this.productsService.updateProduct(props.product).pipe(
                    map(() => updateProductSuccess()),
                    catchError((err) => of(updateProductFailure({ error: err })))
                )
            )
        )
    );

    updateProductSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(updateProductSuccess),
                tap(() => {
                    alert('Product updated!');
                    this.location.back();
                })
            ),
        { dispatch: false }
    );

    updateProductFailure$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(updateProductFailure),
                tap((err) => alert(err.error))
            ),
        { dispatch: false }
    );

    deleteProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteProduct),
            switchMap((props) =>
                this.productsService.deleteProduct(props.productId).pipe(
                    map(() => deleteProductSuccess()),
                    catchError((err) => of(deleteProductFailure({ error: err })))
                )
            )
        )
    );

    deleteProductSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(deleteProductSuccess),
                tap(() => {
                    alert('Product deleted');
                    this.location.back();
                })
            ),
        { dispatch: false }
    );

    deleteProductFailure$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(deleteProductFailure),
                tap((err) => alert(err.error))
            ),
        { dispatch: false }
    );
}