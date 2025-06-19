import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SetUpComponent } from './components/set-up/set-up.component';
import { BeautySpaCardComponent } from './components/beauty-spa-card/beauty-spa-card.component';
import { AccountManagementComponent } from './components/account-management/account-management.component';

import { CarRentalsComponent } from './components/car-rentals/car-rentals.component';
import { CarDealersComponent } from './components/car-dealers/car-dealers.component';
import { AutoRepairComponent } from './components/auto-repair/auto-repair.component';
import { ParkingComponent } from './components/parking/parking.component';
import { OilChangeServiceComponent } from './components/oil-change-service/oil-change-service.component';

export const routes: Routes = [
  { path: '', component: AccountManagementComponent },
  { path: 'login', component: AccountManagementComponent },
  { path: 'home', component: HomeComponent },
  { path: 'set-up', component: SetUpComponent },
  { path: 'businesses/beauty-in-dubai', component: BeautySpaCardComponent },
  { path: 'businesses/car-rentals-in-dubai', component: CarRentalsComponent },
  { path: 'businesses/car-dealers-in-dubai', component: CarDealersComponent },
  { path: 'businesses/auto-repair-in-dubai', component: AutoRepairComponent },
  { path: 'businesses/parking-in-dubai', component: ParkingComponent },
  { path: 'businesses/oil-change-service-in-dubai', component: OilChangeServiceComponent },
  { path: '**', redirectTo: 'home' }
];
