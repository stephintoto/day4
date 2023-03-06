import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictPageComponent } from './pages/district-page/district-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'districts', component: DistrictPageComponent },
  { path: 'single', component: SinglePageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}