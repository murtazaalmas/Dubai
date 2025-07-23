import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

interface CategorySection {
  image: string;
  name: string;
  price: string;
  oldPrice:string;
  detail: string;
}

@Component({
  selector: 'app-cd70tanks',
  imports: [CommonModule, NavbarComponent],
  standalone: true,
  templateUrl: './cd70tanks.component.html',
  styleUrl: './cd70tanks.component.scss'
})
export class CD70TanksComponent {
  categorySections: CategorySection[] = [
    {
      image: '/assets/images/tanks/10029.jpeg',
      name: '2025 Blk CD70',
      price: '$120',
      oldPrice:'$120',
      detail: 'Upgrade your CD70 bike with the sleek and stylish 2025 black fueltank. With its modern design, your bike will stand out from the rest. Enjoy a smoother and more convenient....'
    },
    {
      image: '/assets/images/tanks/10030.jpeg',
      name: '2025 Red CD70',
      price: '$120',
      oldPrice:'$120',      detail: 'Upgrade your CD70 bike with the sleek and stylish 2025 black fueltank. With its modern design, your bike will stand out from the rest. Enjoy a smoother and more convenient....'
    },
    {
      image: '/assets/images/tanks/10031.jpeg',
      name: '2025 Black-Blue Sticker CD70',
      price: '$120',
      oldPrice:'$120',      detail: 'Upgrade your CD70 bike with the sleek and stylish 2025 black fueltank. With its modern design, your bike will stand out from the rest. Enjoy a smoother and more convenient....'
    },
    {
      image: '/assets/images/tanks/10032.jpeg',
      name: '2005 CD70 FUEL TANK - CUSTOMIZED GENUINE',
      price: '$120',
      oldPrice:'$120',
      detail: 'Upgrade your CD70 bike with the sleek and stylish 2025 black fueltank. With its modern design, your bike will stand out from the rest. Enjoy a smoother and more convenient....'
    },
    {
      image: '/assets/images/tanks/10033.jpeg',
      name: '2010 CD70 FUEL TANK - CUSTOMIZED GENUINE',
      price: '$120',
      oldPrice:'$120',
      detail: 'Upgrade your CD70 bike with the sleek and stylish 2025 black fueltank. With its modern design, your bike will stand out from the rest. Enjoy a smoother and more convenient....'
    },
    {
      image: '/assets/images/tanks/10033.jpeg',
      name: '2012 Red CD70',
      price: '$120',
      oldPrice:'$120',
      detail: 'Upgrade your CD70 bike with the sleek and stylish 2025 black fueltank. With its modern design, your bike will stand out from the rest. Enjoy a smoother and more convenient....'
    },
    {
      image: '/assets/images/tanks/10034.jpeg',
      name: '2007 Red CD70',
      price: '$120',
      oldPrice:'$120',
      detail: 'Upgrade your CD70 bike with the sleek and stylish 2025 black fueltank. With its modern design, your bike will stand out from the rest. Enjoy a smoother and more convenient....'
    },
    {
      image: '/assets/images/tanks/10035.jpeg',
      name: '2025 Red Black Sticker | CD70 / High Quality / Outfits',
      price: '$120',
      oldPrice:'$120',
      detail: 'Upgrade your CD70 bike with the sleek and stylish 2025 black fueltank. With its modern design, your bike will stand out from the rest. Enjoy a smoother and more convenient....'
    },
    {
      image: '/assets/images/tanks/10036.jpeg',
      name: '2025 Blk CD70',
      price: '$120',
      oldPrice:'$120',
      detail: 'Upgrade your CD70 bike with the sleek and stylish 2025 black fueltank. With its modern design, your bike will stand out from the rest. Enjoy a smoother and more convenient....'
    },
  ];

  selectedView = 1; // 1 to 5 columns

  setView(cols: number) {
    this.selectedView = cols;
  }
}
