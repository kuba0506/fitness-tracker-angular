import { IUIState, uiReducer, getIsPending as isPendingGetter } from './shared/ui.reducer';
import { IAuthState, authReducer, getIsLogged as isLoggedGetter } from './auth/auth.reducer';

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface IState {
    ui: IUIState;
    auth: IAuthState;
}

export const appReducers: ActionReducerMap<IState> = {
    ui: uiReducer,
    auth: authReducer
};

export const getUiState = createFeatureSelector<IUIState>('ui'); // return subreducer object = state.ui....
export const getisPending = createSelector(getUiState, isPendingGetter); // pull out isPending from ui object

export const getAuthState = createFeatureSelector<IAuthState>('auth'); // return subreducer object = state.ui....
export const getIsLogged = createSelector(getAuthState, isLoggedGetter); // pull out isPending from ui object
