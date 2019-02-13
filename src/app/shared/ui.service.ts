import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})

export class UiService {
  constructor(private snackBar: MatSnackBar) { }

  // isPendingChange = new Subject<boolean>();

  showError(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, { duration });
  }
}
