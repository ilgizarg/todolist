import {Injectable} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {AuthRequestInterfaces, RegRequestInterfaces} from '../store/interfaces/auth.interfaces';
import {AuthUserInterface, UserInterface} from '../../../profile/share/interface/user.interface';
import {Observable} from 'rxjs';
import {AuthUser} from '../../mock/authedUser.mock';

@Injectable()
export class AuthService{
  private devMode = environment.production;

  public auth(props: AuthRequestInterfaces): Observable<AuthUserInterface>  {
    return this.mock();
  }

  public reg(props: RegRequestInterfaces): Observable<AuthUserInterface> {
    return this.mock();
  }

  getCurrentUser(): Observable<AuthUserInterface> {
    console.log('get Current User');
    // const url = environment.apiUrl + '/user'
    // return this.http.get(url).pipe(map(this.getUser))
    return this.mock();
  }

  private mock(): Observable<AuthUserInterface>{

    return new Observable<AuthUserInterface>((user) => {
      setTimeout(() => {
        user.next(new AuthUser());
      }, 500)
    });
  }
}
