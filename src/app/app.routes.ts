import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WheelComponent } from './components/wheel/wheel.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'wheel', component: WheelComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', redirectTo: 'home' }
];
