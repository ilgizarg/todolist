import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import { regAction, regFailureAction, regSuccessAction } from '../actions/regAction'
import { AuthUserInterface } from 'src/app/modules/profile/share/interface/user.interface'
import { of } from 'rxjs'
import {AuthService} from '../../service/auth.service';
import { PersistanceService } from '../../service/persistance.service'

@Injectable()
export class RegEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regAction),
      switchMap(({request}) => {
        return this.authService.reg(request).pipe(
          map((currentUser: AuthUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token)
            return regSuccessAction({currentUser})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              regFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(regSuccessAction),
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
