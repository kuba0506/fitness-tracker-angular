import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { IState } from '../app.reducer';
import { getIsLogged, IAuthState } from './auth.reducer';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators'; // rxjs 6+
// import 'rxjs/add/operator/take';
// import { take } from 'rxjs/operators'; // rxjs 6+
// import 'rxjs/add/operator/pipe';

@Injectable()

export class AuthGuard implements CanActivate, CanLoad {
    constructor(
        private authService: AuthService,
        private store: Store<IState>,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // return this.store.select(getIsLogged).pipe(take(1));
        if (this.authService.isAuth()) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }

    canLoad(route: Route) {
        if (this.authService.isAuth()) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }
}
