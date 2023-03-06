import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent {
  constructor(private heroService: HeroService) {}

  userName: any;
  userEmail: any;
  userPassword: any;

  submitOnClick = () => {
    const userData = {
      userName: this.userName,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
    };

    this.heroService.addData(userData);
    this.heroService.readData();
    this.heroService.deleteData();
  };
}