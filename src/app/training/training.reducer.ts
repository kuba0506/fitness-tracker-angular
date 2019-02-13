import {
    AVAILABLE_EXERCISES, PAST_EXERCISES,
    START_RUNNING_EXERCISE, STOP_RUNNING_EXERCISE, TrainingActions
} from './training.actions';
import { IExercise } from './exercise.model';
import { IState } from '../app.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface ITrainingState {
    availableExercises: IExercise[];
    pastExercises: IExercise[];
    runningExercise: IExercise;
}

export interface State extends IState {
    training: ITrainingState;
}

const initialState: ITrainingState = {
    availableExercises: [],
    pastExercises: [],
    runningExercise: null
};

export function trainingReducer(state = initialState, action: TrainingActions) {
    switch (action.type) {
        case AVAILABLE_EXERCISES:
            return {
                ...state,
                availableExercises: action.payload
            };
        case PAST_EXERCISES:
            return {
                ...state,
                pastExercises: action.payload
            };
        case START_RUNNING_EXERCISE:
            return {
                ...state,
                runningExercise: { ...state.availableExercises.find(ex => ex.id === action.payload) }
            };
        case STOP_RUNNING_EXERCISE:
            return {
                ...state,
                runningExercise: null
            };
        default:
            return state;
    }
}

export const getTrainingState = createFeatureSelector<ITrainingState>('training');
export const getAvailableExercises = createSelector(getTrainingState, (state: ITrainingState) => state.availableExercises);
export const getPastExercises = createSelector(getTrainingState, (state: ITrainingState) => state.pastExercises);
export const getRunningExercise = createSelector(getTrainingState, (state: ITrainingState) => state.runningExercise);
export const getIsTraining = createSelector(getTrainingState, (state: ITrainingState) => state.runningExercise != null);
