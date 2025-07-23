import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

interface CategorySection {
  image: string;
  name: string;
  price: string;
  detail: string;
}
@Component({
  selector: 'app-helmetgadgets',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './helmetgadgets.component.html',
  styleUrl: './helmetgadgets.component.scss'
})
export class HelmetGadgetsComponent {
    categorySections: CategorySection[] = [
      {
        image: '/assets/images/tanks/10029.jpeg',
        name: 'Fuel Tanks',
        price: '$120',
        detail: 'Premium quality fuel tank for CD70.'
      },
      {
        image: '/assets/images/silencer/10104.jpeg',
        name: 'Silencer',
        price: '$80',
        detail: 'High-performance silencer for smooth ride.'
      },
      {
        image: '/assets/images/lights/10065.jpg',
        name: 'Lights',
        price: '$40',
        detail: 'Bright and durable bike lights.'
      },
      {
        image: '/assets/images/helmet/10020.jpeg',
        name: 'Helmets',
        price: '$60',
        detail: 'Safety helmets for all bike models.'
      },
      {
        image: '/assets/images/lights/10066.jpg',
        name: 'Speedometers',
        price: '$35',
        detail: 'Accurate and stylish speedometers.'
      },
      {
        image: '/assets/images/wheel/10011.jpg',
        name: 'AlloyRims',
        price: '$150',
        detail: 'Durable and stylish alloy rims.'
      },
      {
        image: '/assets/images/_Studio/10076.jpg',
        name: 'Decor Items',
        price: '$25',
        detail: 'Decorative items for your bike.'
      },
      {
        image: '/assets/images/_Studio/10113.png',
        name: 'Parts',
        price: '$50',
        detail: 'Genuine and aftermarket bike parts.'
      }
    ];
  
    selectedView = 1; // 1 to 5 columns
  
    setView(cols: number) {
      this.selectedView = cols;
    }
  }
  