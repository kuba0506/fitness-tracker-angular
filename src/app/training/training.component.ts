import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TrainingService } from './training.service';
import { State, getIsTraining } from './training.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.less']
})
export class TrainingComponent implements OnInit {
  exerciseSubscription: Subscription;

  ongoingTraining$: Observable<boolean>;
  // ongoingTraining = false;

  constructor(
    private trainingService: TrainingService,
    private store: Store<State>) { }

  ngOnInit() {
    this.ongoingTraining$ = this.store.select(getIsTraining);
    // this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(exercise => {
    //   if (exercise) {
    //     this.ongoingTraining = true;
    //   } else {
    //     this.ongoingTraining = false;
    //   }
    // });
  }

  // ngOnDestroy(): void {
  //   if (this.exerciseSubscription) {
  //     this.exerciseSubscription.unsubscribe();
  //   }
  // }

}
