import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IState, getIsLogged } from 'src/app/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>(); // no payload
  isLogged$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private store: Store<IState>) { }

  ngOnInit() {
    this.isLogged$ = this.store.select(getIsLogged);
  }

  onLogout() {
    this.authService.logout();
  }

  onSidenavToggle() {
    this.sidenavToggle.emit();
  }
}
