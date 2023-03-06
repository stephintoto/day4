import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeadingComponent } from './heading/heading.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DistrictPageComponent } from './pages/district-page/district-page.component';
import { CardComponent } from './card/card.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { FormsModule } from '@angular/forms';
import { SinglePageComponent } from './pages/single-page/single-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HeadingComponent,
    HomePageComponent,
    DistrictPageComponent,
    CardComponent,
    SignupPageComponent,
    SinglePageComponent,
    LoginPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}