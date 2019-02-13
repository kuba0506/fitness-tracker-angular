import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators'; // rxjs 6+
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { IState, getisPending } from 'src/app/app.reducer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isPending$: Observable<boolean>;
  // isPending = false;
  // private subscription: Subscription;

  constructor(
    private authService: AuthService,
    private store: Store<IState>) { }

  ngOnInit() {
    this.isPending$ = this.store.select(getisPending);
    // this.isPending$ = this.store.map(state => state.ui.isPending);
    // this.subscription = this.uiservice.isPendingChange.subscribe(isPending => {
    //   this.isPending = isPending;
    // });

    this.loginForm = new FormGroup({
      email: new FormControl('', { validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  onSubmit(form: FormGroup) {
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    });
  }

}
