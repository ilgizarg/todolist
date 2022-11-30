import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {UserInterface} from '../../../../../modules/profile/share/interface/user.interface';
import {
  isLoggedInSelector,
  isAnonymousSelector,
  currentUserSelector
} from 'src/app/modules/auth/share/store/selectors';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-topbar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss']
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean| null> ;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<UserInterface | null> | undefined;

  constructor(private store: Store) {
  // @ts-ignore
    this.isLoggedIn$ = this.store.select(isLoggedInSelector).pipe(map((a) => {
      return a;
    }));

    // @ts-ignore
    this.isAnonymous$ = this.store.select(isAnonymousSelector);
    // @ts-ignore
    this.currentUser$ = this.store.select(currentUserSelector);
  }

  ngOnInit(): void {

  }
}
