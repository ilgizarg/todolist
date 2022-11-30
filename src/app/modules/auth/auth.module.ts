import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './component/auth/auth.component';
import { RegComponent } from './component/reg/reg.component';
import {AuthService} from './share/service/auth.service';
import {PersistanceService} from './share/service/persistance.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptor} from './share/service/authinterceptor.service';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RegEffect} from './share/store/effects/reg.effect';
import {AuthEffect} from './share/store/effects/auth.effect';
import { RouterModule } from '@angular/router';
import { routes } from './auth-routing.module';
import {authReducer} from './share/store/reducer';
import {GetAuthUserEffect} from './share/store/effects/getAuthUser.effect';



@NgModule({
  declarations: [
    AuthComponent,
    RegComponent
  ],
  exports: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([
      RegEffect,
      AuthEffect,
      GetAuthUserEffect

    ]),


  ],
  providers: [
    AuthService,
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }]
})
export class AuthModule {

}


