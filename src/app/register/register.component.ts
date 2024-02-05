import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerFormValues = [
    {
      label: 'First Name',
      key: 'first_name',
      required: true,
      value: '',
      controlType: 'textbox',
    },
    {
      label: 'Last Name',
      key: 'last_name',
      required: true,
      value: '',
      controlType: 'textbox',
    },
    {
      label: 'Role',
      key: 'role',
      required: false,
      value: '',
      controlType: 'dropdown',
      options: [
        {
          key: '1',
          value: 'Male',
        },
        {
          key: '2',
          value: 'Female',
        },
      ],
    },
  ];

  submitRegisterForm(event: any) {
    console.log('event===', event);
  }
}
