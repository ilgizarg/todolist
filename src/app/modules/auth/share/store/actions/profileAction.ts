import {createAction, props} from '@ngrx/store';
import { AuthUserInterface } from 'src/app/modules/profile/share/interface/user.interface';
import { ActionTypes } from '../actionTypes';


export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: AuthUserInterface}>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
);
