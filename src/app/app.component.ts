import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getCurrentUserAction} from './modules/auth/share/store/actions/profileAction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements  OnInit {
  title = 'todolist';
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }
}
