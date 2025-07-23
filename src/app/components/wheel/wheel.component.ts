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
  selector: 'app-wheel',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.scss'
})
export class WheelComponent {
  categorySections: CategorySection[] = [
    {
      image: '/assets/images/wheel/10011.jpg',
      name: 'Alloyrims Silver CD70 | Star Shape | Premium Quality',
      price: '$120',
      detail: 'Upgrade your bike with our Alloyrims Silver CD70! Featuring a star shape design for an aesthetic look and better grip, these premium quality rims will enhance your riding experience. Experience..'
    },
    {
      image: '/assets/images/wheel/10061.jpg',
      name: 'Silver Curve Alloy Rims for CD 70 – Durable & Sleek Design',
      price: '$80',
      detail: 'High-performance silencer for smooth ride.'
    },
    {
      image: '/assets/images/wheel/10011.jpg',
      name: 'Alloyrims Silver CD70 | Star Shape | Premium Quality',
      price: '$120',
      detail: 'Upgrade your bike with our Alloyrims Silver CD70! Featuring a star shape design for an aesthetic look and better grip, these premium quality rims will enhance your riding experience. Experience..'
    },
    {
      image: '/assets/images/wheel/10061.jpg',
      name: 'Silver Curve Alloy Rims for CD 70 – Durable & Sleek Design',
      price: '$80',
      detail: 'High-performance silencer for smooth ride.'
    },
   
  ];

  selectedView = 1; // 1 to 5 columns

  setView(cols: number) {
    this.selectedView = cols;
  }
}
