import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';
import { TrainingService } from '../training.service';
import { IExercise } from '../exercise.model';
import { Store } from '@ngrx/store';
import { State, getRunningExercise } from '../training.reducer';

import { take } from 'rxjs/operators'; // rxjs 6+

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.less']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  interval;

  constructor(
    private dialog: MatDialog,
    private store: Store<State>,
    private trainingService: TrainingService) { }

  ngOnInit() {
    this.startOrResumeExercise();
  }

  stopExercise() {
    // stop counting
    if (this.interval) {
      clearInterval(this.interval);
    }

    // open dialog
    const dialog = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });

    // decide upon user selction to resume or stop
    dialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.startOrResumeExercise();
      }
    });
  }

  startOrResumeExercise() {
    this.store.select(getRunningExercise).pipe(take(1)).subscribe(ex => {
      const step = this.trainingService.getRunningExercise().duration / 100 * 1000;

      this.interval = setInterval(() => {
        this.progress = this.progress + 1;

        if (this.progress >= 100) {
          this.trainingService.completeExercise();
          clearInterval(this.interval);
        }
      }, step);

    });
  }

}
