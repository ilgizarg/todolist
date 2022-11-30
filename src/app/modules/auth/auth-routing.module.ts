import { AuthComponent } from './component/auth/auth.component';
import {RegComponent} from './component/reg/reg.component';


export const routes = [
  {
    path: 'register',
    component: RegComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  }
]
