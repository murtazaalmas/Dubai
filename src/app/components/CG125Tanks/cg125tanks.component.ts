import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

interface CategorySection {
    image: string;
    name: string;
    price: string;
    oldPrice: string;
    detail: string;
}

@Component({
    selector: 'app-cg125tanks',
    imports: [CommonModule, NavbarComponent],

    standalone: true,
    templateUrl: './cg125tanks.component.html',
    styleUrl: './cg125tanks.component.scss'
})
export class CG125TanksComponent {
    categorySections: CategorySection[] = [
        {
            image: '/assets/images/tanks/10029.jpeg',
            name: 'Fuel Tanks',
            price: '$120',
            oldPrice: '$120', 
            detail: 'Premium quality fuel tank for CD70.'
        },
        {
            image: '/assets/images/silencer/10104.jpeg',
            name: 'Silencer',
            price: '$120',
            oldPrice: '$120', 
            detail: 'High-performance silencer for smooth ride.'
        },
        {
            image: '/assets/images/lights/10065.jpg',
            name: 'Lights',
            price: '$120',
            oldPrice: '$120', 
            detail: 'Bright and durable bike lights.'
        },
        {
            image: '/assets/images/helmet/10020.jpeg',
            name: 'Helmets',
            price: '$120',
            oldPrice: '$120', 
            detail: 'Safety helmets for all bike models.'
        },
        {
            image: '/assets/images/lights/10066.jpg',
            name: 'Speedometers',
            price: '$120',
            oldPrice: '$120', 
            detail: 'Accurate and stylish speedometers.'
        },
        {
            image: '/assets/images/wheel/10011.jpg',
            name: 'AlloyRims',
            price: '$120',
            oldPrice: '$120', 
            detail: 'Durable and stylish alloy rims.'
        },
        {
            image: '/assets/images/_Studio/10076.jpg',
            name: 'Decor Items',
            price: '$120',
            oldPrice: '$120', 
            detail: 'Decorative items for your bike.'
        },
        {
            image: '/assets/images/_Studio/10113.png',
            name: 'Parts',
            price: '$120',
            oldPrice: '$120', 
            detail: 'Genuine and aftermarket bike parts.'
        }
    ];

    selectedView = 1; // 1 to 5 columns

    setView(cols: number) {
        this.selectedView = cols;
    }
}
