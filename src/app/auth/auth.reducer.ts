import { IS_LOGGED, IS_NOT_LOGGED, AuthActions } from './auth.actions';

export interface IAuthState {
    isLogged: boolean;
}

const initialState: IAuthState = {
    isLogged: false
};

export function authReducer(state = initialState, action: AuthActions) {
    switch (action.type) {
        case IS_LOGGED:
            return {
                isLogged: true
            };
        case IS_NOT_LOGGED:
            return {
                isLogged: false
            };
        default:
            return state;
    }
}

export const getIsLogged = (state: IAuthState) => state.isLogged;
