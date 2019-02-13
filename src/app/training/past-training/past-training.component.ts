import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { IExercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, getPastExercises } from '../training.reducer';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.less']
})

export class PastTrainingComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['date', 'name', 'calories', 'duration', 'state'];
  dataSource = new MatTableDataSource<IExercise>();
  private pastExerciseSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  constructor(
    private trainingService: TrainingService,
    private store: Store<State>) { }

  ngOnInit() {
    this.trainingService.getPastExercises();
    this.store.select(getPastExercises).subscribe((exercises: IExercise[]) => {
      this.dataSource.data = exercises;
    });
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.pagination;
  }

  doFilter(query: string) {
    this.dataSource.filter = query.trim().toLowerCase();
  }
}
