import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {RegRequestInterfaces} from '../interfaces/auth.interfaces';
import {AuthUserInterface} from '../../../../profile/share/interface/user.interface';
import {BackendErrorsInterface} from '../../../../../share/types/backendErrors.interface';

export const regAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegRequestInterfaces}>()
);

export const regSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser: AuthUserInterface}>()
)

export const regFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
