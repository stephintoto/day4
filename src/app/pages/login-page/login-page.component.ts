import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  userName: any;
  userPassword: any;

  submitOnClick = () => {
    console.log('Function call from Login');
    console.log(this.userName);
    console.log(this.userPassword);
  };
}