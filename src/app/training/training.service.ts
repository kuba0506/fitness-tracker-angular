import { Injectable, OnInit } from '@angular/core';
import { IExercise } from './exercise.model';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';
import { take } from 'rxjs/operators'; // rxjs 6+
// import 'rxjs/add/operator/pipe';


import { UiService } from '../shared/ui.service';
import { Store } from '@ngrx/store';
import { IState } from '../app.reducer';
import * as UI from '../shared/ui.actions';
import * as Training from './training.actions';
import { State, getRunningExercise } from './training.reducer';


@Injectable({
  providedIn: 'root'
})

export class TrainingService {
  constructor(
    private fireDB: AngularFirestore,
    private store: Store<State>,
    private uiService: UiService) { }

  exerciseChanged = new Subject<IExercise>();
  exercisesChanged = new Subject<IExercise[]>();
  pastExercises = new Subject<IExercise[]>();
  counter = 0;

  private fireSubsubscriptions: Subscription[] = [];

  private availableExercises: IExercise[] = [];
  private runningExercise: IExercise;

  getAll() {
    this.store.dispatch(new UI.StartLoading());
    // this.uiService.isPendingChange.next(true);

    this.fireSubsubscriptions.push(this.fireDB
      .collection('availableExercises')
      // .valueChanges() // receive just data
      .snapshotChanges() // receive data and metadata
      .map(data => {
        return data.map(doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
          };
        });
      })
      .subscribe((exercises: IExercise[]) => {
        this.availableExercises = exercises;
        this.store.dispatch(new UI.StopLoading());
        this.store.dispatch(new Training.AvailableExercises(exercises));
        // this.exercisesChanged.next([...this.availableExercises]);
        // this.uiService.isPendingChange.next(false);
      }, e => {
        console.error(e);
        // add some error notification
        this.uiService.showError('Fetching exercises failed', null, 3000);
        this.store.dispatch(new UI.StopLoading());
        this.store.dispatch(new Training.AvailableExercises(null));
        // this.uiService.isPendingChange.next(false);
        // this.exercisesChanged.next(null);
      }));

  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  getPastExercises(): void {
    this.fireSubsubscriptions.push(this.fireDB.collection('pastExercises')
      .valueChanges()
      .subscribe((exercises: IExercise[]) => {
        this.store.dispatch(new Training.PastExercises(exercises));
        // this.pastExercises.next(exercises);
        // console.log('past exercises', exercises);
      }, e => console.error(e)));
  }

  startExercise(exerciseID: string) {
    this.fireDB.doc('availableExercises/' + exerciseID)
      .update({ lastSelected: new Date() }); // last selected from dropdown
    this.runningExercise = this.availableExercises.find(ex => ex.id === exerciseID);
    this.store.dispatch(new Training.StartRunningExercise(exerciseID));
    // this.exerciseChanged.next({ ...this.runningExercise });
  }

  completeExercise() {
    this.store.select(getRunningExercise).pipe(take(1)).subscribe(ex => {
      this.addExerciseToDB({ ...ex, date: new Date(), state: 'completed' });
      this.runningExercise = null;
      this.store.dispatch(new Training.StopRunningExercise());
      // this.exerciseChanged.next(null);
    });

  }

  cancelExercise(progress: number) {
    this.store.select(getRunningExercise).pipe(take(1)).subscribe(ex => {
      this.addExerciseToDB({
        ...ex, date: new Date(), state: 'cancelled', duration: ex.duration * (progress / 100),
        calories: ex.calories * (progress / 100)
      });
      this.runningExercise = null;
      this.store.dispatch(new Training.StopRunningExercise());
    });
    // this.exerciseChanged.next(null);
  }

  cancelTrainingSubscriptions() {
    this.fireSubsubscriptions.forEach(s => s.unsubscribe());
  }

  private addExerciseToDB(exercise: any) {
    // console.log('exercise to be added', exercise)
    this.fireDB.collection('pastExercises')
      .add(exercise);
  }
}
