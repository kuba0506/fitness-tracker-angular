import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  // @ViewChild('sidenav');

  openSidenav = false;
  title = 'fitness-tracker-angular';
  constructor(private authService: AuthService) {}
  
  ngOnInit() {
    this.authService.initAuthListener();
  }

  sidenavToggle() {

  }
}
