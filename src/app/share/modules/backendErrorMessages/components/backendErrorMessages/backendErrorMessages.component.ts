import {Component, Input, OnInit} from '@angular/core';
import { BackendErrorsInterface } from 'src/app/share/types/backendErrors.interface';


@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.components.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;
  errorMessages: string[];
  constructor() {
    this.backendErrorsProps = {};

    this.errorMessages = [];
  }


  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(' ');
        return `${name} ${messages}`;
      }
    );
  }
}
