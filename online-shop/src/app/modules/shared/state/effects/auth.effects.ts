import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../types/products.types';
import { login, loginFailure, loginSuccess, userInfo } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap((props) =>
                this.authService.login(props.credentials).pipe(
                    map((token) => {
                        localStorage.setItem('token', token.access_token);
                        return loginSuccess({ token });
                    }),
                    catchError((error: HttpErrorResponse) => of(loginFailure({ error: 'Invalid credentials. Please try again.' })))
                )
            )
        )
    );

    loginSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginSuccess),
            switchMap(() =>
                this.authService.getUser().pipe(
                    map((user: User) => userInfo({ user })),
                    catchError((error) => of(loginFailure({ error: 'Failed to fetch user data.' })))
                )
            )
        )
    );

    userInfo$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(userInfo),
                tap((props) => {
                    alert("Welcome")
                    this.router.navigate(['/products']);
                })
            ),
        { dispatch: false }
    );

    loginFailure$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(loginFailure),
                tap((err) => alert(err.error))
            ),
        { dispatch: false }
    );

}
