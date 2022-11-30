import {Component, OnInit} from '@angular/core';
import {AuthUserInterface, UserInterface} from '../../../profile/share/interface/user.interface';
import {AuthService} from '../../share/service/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  AuthUser$: Observable<AuthUserInterface>;

  constructor(private authService: AuthService) {
    this.AuthUser$ = this.authService.auth({username: 'Demo', password: 'Demo'});
  }

  ngOnInit() {
  }
}
