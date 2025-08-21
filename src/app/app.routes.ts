import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ColorGameComponent } from './components/color-game/color-game.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'color-game', component: ColorGameComponent },
  
];
