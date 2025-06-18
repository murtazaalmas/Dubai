import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SetUpComponent } from './set-up/set-up.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { BeautySpaCardComponent } from './business/beauty-spa-card/beauty-spa-card.component';
import { BusinessCardComponent } from './business/business-card/business-card.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'set-up', component: SetUpComponent },
  { path: 'business/beauty-in-dubai', component: BeautySpaCardComponent },
  { path: 'business/car-in-dubai', component: BusinessCardComponent },
  { path: '**', redirectTo: '' } 
];
