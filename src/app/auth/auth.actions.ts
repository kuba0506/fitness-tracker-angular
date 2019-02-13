import { Action } from '@ngrx/store';

export const IS_LOGGED = '[AUTH] IS_LOGGED';
export const IS_NOT_LOGGED = '[AUTH] IS_NOT_LOGGED';

export class IsLogged implements Action {
    readonly type = IS_LOGGED;
}
export class IsNotLogged implements Action {
    readonly type = IS_NOT_LOGGED;
}

export type AuthActions = IsLogged | IsNotLogged;
