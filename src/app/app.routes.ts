import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SetUpComponent } from './components/set-up/set-up.component';
import { AccountManagementComponent } from './components/account-management/account-management.component';
import { CarDealersComponent } from './components/car-dealers/car-dealers.component';

export const routes: Routes = [
  // { path: '', component: AccountManagementComponent },
  // { path: 'login', component: AccountManagementComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'set-up', component: SetUpComponent },
  { path: 'businesses/car-dealers-in-dubai', component: CarDealersComponent },
  { path: '**', redirectTo: 'home' }
];
