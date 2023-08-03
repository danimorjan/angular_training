import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { AuthState } from "../state/auth.state";

export const selectAuthState = (state: AppState) => state.auth;

export const selectCurrentUser = createSelector(selectAuthState, (state: AuthState) => state.currentUser);

export const selectAdminRole = createSelector(
    selectAuthState,
    (state: AuthState) => state.currentUser?.roles.includes('admin') || false
);

export const selectCustomerRole = createSelector(
    selectAuthState,
    (state: AuthState) => state.currentUser?.roles.includes('customer') || false
);