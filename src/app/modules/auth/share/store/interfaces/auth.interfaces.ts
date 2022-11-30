import { AuthUserInterface } from 'src/app/modules/profile/share/interface/user.interface';
import {BackendErrorsInterface} from '../../../../../share/types/backendErrors.interface';

export interface AuthRequestInterfaces {
  username: string;
  password: string;
}

export interface RegRequestInterfaces {
 username: string;
 phone: string | null;
 email: string | null;
}


export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: AuthUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
  isLoading: boolean;
}




