import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {AuthRequestInterfaces} from '../interfaces/auth.interfaces';
import {AuthUserInterface} from '../../../../profile/share/interface/user.interface';
import {BackendErrorsInterface} from '../../../../../share/types/backendErrors.interface';

export const authAction = createAction(
  ActionTypes.AUTH,
  props<{request: AuthRequestInterfaces}>()
);

export const authSuccessAction = createAction(
  ActionTypes.AUTH_SUCCESS,
  props<{currentUser: AuthUserInterface}>()
);

export const authFailureAction = createAction(
  ActionTypes.AUTH_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
