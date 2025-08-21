import { Routes } from '@angular/router';
import { ColorGameComponent } from './components/color-game/color-game.component';

export const routes: Routes = [
  { path: '', component: ColorGameComponent },
  { path: 'color-game', component: ColorGameComponent },
];
