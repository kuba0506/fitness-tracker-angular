import { Injectable } from '@angular/core';
import { IAuthData } from './auth-data.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { TrainingService } from '../training/training.service';
import { UiService } from '../shared/ui.service';
import { Store } from '@ngrx/store';
// import { IUIState } from '../shared/ui.reducer';
import { IState } from '../app.reducer';
import * as UI from '../shared/ui.actions';
import * as Auth from './auth.actions';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isLogged = false;

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private uiService: UiService,
    private store: Store<IState>,
    private trainingService: TrainingService) { }

  initAuthListener() {
    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.isLogged = true;
        this.store.dispatch(new Auth.IsLogged());
        // this.authChange.next(true);
        this.router.navigate(['/training']);
      } else {
        this.trainingService.cancelTrainingSubscriptions();
        this.store.dispatch(new Auth.IsNotLogged());
        // this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isLogged = false;
      }
    });
  }

  registerUser(authData: IAuthData) {
    // this.uiService.isPendingChange.next(true);
    this.store.dispatch(new UI.StartLoading());
    this.fireAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
    .then(result => {
      // this.uiService.isPendingChange.next(false);
        this.store.dispatch(new UI.StopLoading());
        // console.log(result);
      })
      .catch(error => {
        // this.uiService.isPendingChange.next(false);
        this.store.dispatch(new UI.StopLoading());
        this.uiService.showError(error.message, null, 3000);
        // console.log(error);
      });
    // this.user = {
    //   email: authData.email,
    //   userId: Math.round(Math.random() * 10000).toString()
    // };
  }

  login(authData: IAuthData) {
    // this.uiService.isPendingChange.next(true);
    this.store.dispatch(new UI.StartLoading());
    this.fireAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        // this.uiService.isPendingChange.next(false);
        this.store.dispatch(new UI.StopLoading());
        console.log(result);
        // this.authUser(true, '/training');
        // this.isLogged = true;
      })
      .catch(error => {
        // this.uiService.isPendingChange.next(false);
        this.store.dispatch(new UI.StopLoading());
        this.uiService.showError(error.message, null, 3000);
        console.log(error);
      });
    // this.user = {
    //   email: authData.email,
    //   userId: Math.round(Math.random() * 10000).toString()
    // };
    // this.authUser(true, '/training');
  }

  logout() {
    this.fireAuth.auth.signOut();
    // this.trainingService.cancelTrainingSubscriptions();
    // this.isLogged = false;
    // this.authUser(false, '/login');
  }

  isAuth() {
    return this.isLogged;
  }
}
