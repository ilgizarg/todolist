import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {authAction, authFailureAction, authSuccessAction} from '../actions/authAction';
import {AuthUserInterface} from '../../../../profile/share/interface/user.interface';
import { AuthService } from '../../service/auth.service'
import { PersistanceService } from '../../service/persistance.service'


@Injectable()
export class AuthEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction),
      switchMap(({request}) => {
        return this.authService.auth(request).pipe(
          map((currentUser: AuthUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token)
            return authSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(authFailureAction({errors: errorResponse.error.errors}))
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
