import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../service/auth.service';
import { PersistanceService } from '../../service/persistance.service';
import {getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction} from '../actions/profileAction';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {AuthUserInterface} from '../../../../profile/share/interface/user.interface';

@Injectable()
export class GetAuthUserEffect {
  getCurresnUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        console.log('get Current Action');
        const token = this.persistanceService.get('token');

        if (!token) {
          return of(getCurrentUserAction());
        }

        return this.authService.getCurrentUser().pipe(
          map((currentUser: AuthUserInterface) => {
            return getCurrentUserSuccessAction({currentUser});
          }),

          catchError(() => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    );
  });

  constructor(private action$: Actions,
              private authService: AuthService,
              private persistanceService: PersistanceService) {
  }
}
