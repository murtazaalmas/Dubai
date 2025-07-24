import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WheelComponent } from './components/wheel/wheel.component';
import { CD70TanksComponent } from './components/CD70Tanks/cd70tanks.component';
import { CG125TanksComponent } from './components/CG125Tanks/cg125tanks.component';
import { LEDLightingComponent } from './components/LEDLighting/ledlighting.component';
import { SilencerComponent } from './components/Silencer/silencer.component';
import { HelmetGadgetsComponent } from './components/HelmetGadgets/helmetgadgets.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'wheel', component: WheelComponent },
  { path: 'cd70tanks', component: CD70TanksComponent },
  { path: 'cg125tanks', component: CG125TanksComponent },
  { path: 'ledlighting', component: LEDLightingComponent },
  { path: 'silencer', component: SilencerComponent },
  { path: 'helmetgadgets', component: HelmetGadgetsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', redirectTo: 'home' }
];
