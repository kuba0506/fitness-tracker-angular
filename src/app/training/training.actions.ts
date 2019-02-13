import { Action } from '@ngrx/store';
import { IExercise } from './exercise.model';

export const AVAILABLE_EXERCISES = '[TRAINING] AVAILABLE_EXERCISES';
export const PAST_EXERCISES = '[TRAINING] PAST_EXERCISES';
export const START_RUNNING_EXERCISE = '[TRAINING] START_RUNNING_EXERCISE';
export const STOP_RUNNING_EXERCISE = '[TRAINING] STOP_RUNNING_EXERCISE';

export class AvailableExercises implements Action {
    readonly type = AVAILABLE_EXERCISES;
    constructor(public payload: IExercise[]) { }
}
export class PastExercises implements Action {
    readonly type = PAST_EXERCISES;
    constructor(public payload: IExercise[]) { }
}

export class StartRunningExercise implements Action {
    readonly type = START_RUNNING_EXERCISE;
    constructor(public payload: string) { }
}

export class StopRunningExercise implements Action {
    readonly type = STOP_RUNNING_EXERCISE;
}


export type TrainingActions = AvailableExercises |
    PastExercises |
    StartRunningExercise |
    StopRunningExercise;
