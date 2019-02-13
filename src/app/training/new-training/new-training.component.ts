import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { IExercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
// import { map } from 'rxjs/operators'; // rxjs 6+
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { IState, getisPending } from 'src/app/app.reducer';
import { State, getAvailableExercises } from '../training.reducer';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.less']
})
export class NewTrainingComponent implements OnInit {
  exercises$: Observable<IExercise[]>;
  // exercises: IExercise[] = [];
  isPending$: Observable<boolean>;
  subscriptionContainer: Subscription[] = [];

  constructor(
    private trainingService: TrainingService,
    private store: Store<State>) { }

  ngOnInit() {
    this.isPending$ = this.store.select(getisPending);
    this.exercises$ = this.store.select(getAvailableExercises);
    this.getAllExercises();
    // this.subscriptionContainer.push(
    //   this.trainingService.exercisesChanged
    //     .subscribe(exercises => (this.exercises = exercises))
    // );
  }

  // ngOnDestroy() {
  //   if (this.subscriptionContainer.length > 0) {
  //     this.subscriptionContainer.forEach(sub => sub.unsubscribe());
  //   }
  // }

  startExercise(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  getAllExercises() {
    this.trainingService.getAll();
  }
}
