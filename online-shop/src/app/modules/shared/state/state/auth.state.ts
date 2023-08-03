import { User } from "../../types/products.types";


export interface AuthState {
    currentUser: User | null;
    error: string;
}

export const initialAuthState: AuthState = {
    currentUser: null,
    error: ""
}