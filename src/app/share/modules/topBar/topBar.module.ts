import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TopBarComponent} from './components/topBar/topBar.component';
import {StoreModule} from '@ngrx/store';
import {authReducer} from '../../../modules/auth/share/store/reducer';
import {EffectsModule} from '@ngrx/effects';
import {RegEffect} from '../../../modules/auth/share/store/effects/reg.effect';
import {AuthEffect} from '../../../modules/auth/share/store/effects/auth.effect';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([
      RegEffect,
      AuthEffect
    ]),
  ],
  declarations: [
    TopBarComponent
  ],
  exports: [
    TopBarComponent
  ]
})
export class TopBarModule {}
