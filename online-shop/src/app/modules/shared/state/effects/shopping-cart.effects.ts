import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, tap } from "rxjs";
import { switchMap } from "rxjs/operators";
import { ShoppingCartService } from "src/app/modules/shopping-cart/services/shopping-cart.service";
import { addToCart, createOrder, createOrderFailure, createOrderSuccess } from "../actions/shopping-cart.actions";

@Injectable()
export class ShoppingCartEffects {
    constructor(
        private shoppingCartService: ShoppingCartService,
        private actions$: Actions,
        private location: Location
    ) {
    }

    saveOrder$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createOrder),
            switchMap((props) =>
                this.shoppingCartService.createOrder(props.order).pipe(
                    map(() => createOrderSuccess()),
                    catchError((err) => of(createOrderFailure({ error: err })))
                )
            )
        )
    );

    saveOrderSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(createOrderSuccess),
                tap(() => {
                    alert("Order placed");
                    this.location.back();
                })
            ),
        { dispatch: false }
    );

    saveOrderFailure$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(createOrderFailure),
                tap((err) => {
                    alert(err.error);
                })
            ),
        { dispatch: false }
    );
}