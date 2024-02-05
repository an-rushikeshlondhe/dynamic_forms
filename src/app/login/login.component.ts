import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginFormGroups = [
    {
      label: 'User Name',
      key: 'user_name',
      required: true,
      value: '',
      controlType: 'textbox',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      value: '',
      controlType: 'textbox',
    },
  ];

  submitLoginForm(event: any) {
    console.log('event===', event);
  }
}
