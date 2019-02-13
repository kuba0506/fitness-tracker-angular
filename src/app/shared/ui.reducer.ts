import { START_LOADING, STOP_LOADING, UIActions } from './ui.actions';

export interface IUIState {
    isPending: boolean;
}

const initialState: IUIState = {
    isPending: false
};

export function uiReducer(state = initialState, action: UIActions) {
// export function uiReducer(state = initialState, action: Action) {
    switch (action.type) {
        case START_LOADING:
            return {
                isPending: true
            };
        case STOP_LOADING:
            return {
                isPending: false
            };
        default:
            return state;
    }
}

export const getIsPending = (state: IUIState) => state.isPending;
