import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess, userInfo } from "../actions/auth.actions";
import { initialAuthState } from "../state/auth.state";

export const authReducer = createReducer(
    initialAuthState,

    on(login, (state) => ({
        ...state,
        error: ""
    })),

    on(loginSuccess, (state, { token }) => ({
        ...state,
        error: ""
    })),

    on(userInfo, (state, { user }) => ({
        ...state,
        currentUser: user,
        error: "",
    })),

    on(loginFailure, (state, { error }) => ({
        ...state,
        error: error,
    }))
);