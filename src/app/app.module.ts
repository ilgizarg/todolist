import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProfileModule} from './modules/profile/profile.module';
import {AuthModule} from './modules/auth/auth.module';
import {ScheduleModule} from './modules/schedule/schedule.module';
import {TaskModule} from './modules/task/task.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BackendErrorMessagesModule } from './share/modules/backendErrorMessages/backendErrorMessages.module';
import {TopBarModule} from './share/modules/topBar/topBar.module';


@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BackendErrorMessagesModule,
    ProfileModule,
    AuthModule,
    ScheduleModule,
    TaskModule,
    TopBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
