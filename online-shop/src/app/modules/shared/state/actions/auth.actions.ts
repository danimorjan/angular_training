import { createAction, props } from "@ngrx/store";
import { Credentials, Token, User } from "../../types/products.types";

export enum AuthActions {
    login = '[Auth] Login',
    loginSuccess = '[Auth] Login Success',
    userInfo = '[Auth] User Info',
    loginFailure = '[Auth] Login Failure'
}

export const login = createAction(
    AuthActions.login,
    props<{ credentials: Credentials }>()
);

export const loginSuccess = createAction(
    AuthActions.loginSuccess,
    props<{ token: Token }>()
);

export const userInfo = createAction(
    AuthActions.userInfo,
    props<{ user: User }>()
);

export const loginFailure = createAction(
    AuthActions.loginFailure,
    props<{ error: string }>()
);