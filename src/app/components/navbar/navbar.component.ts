import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface NavDropdownItem {
  name: string;
  icon: string;
  route: string;
}

export interface NavMenuItem {
  name: string;
  icon: string;
  route?: string;
  dropdown?: NavDropdownItem[];
}

export interface TopBarLink {
  label: string;
  route?: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentDate = new Date();

  topBarLinks: TopBarLink[] = [
    { label: 'Things To Do' },
    { label: 'Explore Dubai' },
    { label: 'The Blog' }
  ];

  topBarButton = { label: 'Advertise With Us' };

  navMenu: NavMenuItem[] = [
    {
      name: 'Beauty & Spa',
      icon: 'fas fa-spa',
      dropdown: [
        { name: 'Spa Centers', icon: 'fas fa-spa', route: '/businesses/beauty-in-dubai' },
        { name: 'Massage Centers', icon: 'fas fa-hands', route: '/businesses/beauty-in-dubai' },
        { name: 'Beauty Salons', icon: 'fas fa-cut', route: '/businesses/beauty-in-dubai' },
        { name: 'Perfume Stores', icon: 'fas fa-spray-can-sparkles', route: '/businesses/beauty-in-dubai' },
        { name: 'Cosmetic Stores', icon: 'fas fa-pump-soap', route: '/businesses/beauty-in-dubai' },
        { name: 'Laser Treatments', icon: 'fas fa-wand-magic-sparkles', route: '/businesses/beauty-in-dubai' },
        { name: 'Nails Salons', icon: 'fas fa-hand-sparkles', route: '/businesses/beauty-in-dubai' },
        { name: "Women's Salon", icon: 'fas fa-female', route: '/businesses/beauty-in-dubai' },
        { name: "Men's Salon", icon: 'fas fa-male', route: '/businesses/beauty-in-dubai' }
      ]
    },
    {
      name: 'Nightlife',
      icon: 'fas fa-glass-martini-alt',
      dropdown: [
        { name: 'Live Music Venues', icon: 'fas fa-music', route: '/nightlife/live-music' },
        { name: 'Cocktail Bars', icon: 'fas fa-glass-martini-alt', route: '/nightlife/cocktail-bars' },
        { name: 'Nightclubs', icon: 'fas fa-drum', route: '/nightlife/nightclubs' },
        { name: 'Late Night Dining', icon: 'fas fa-utensils', route: '/nightlife/late-night-dining' },
        { name: 'Entertainment Shows', icon: 'fas fa-theater-masks', route: '/nightlife/entertainment-shows' },
        { name: 'Rooftop Bars', icon: 'fas fa-cocktail', route: '/nightlife/rooftop-bars' }
      ]
    },
    {
      name: 'Restaurants',
      icon: 'fas fa-utensils',
      dropdown: [
        { name: 'Fine Dining', icon: 'fas fa-utensils', route: '/restaurants/fine-dining' },
        { name: 'Italian Cuisine', icon: 'fas fa-pizza-slice', route: '/restaurants/italian' },
        { name: 'BBQ & Grill', icon: 'fas fa-drumstick-bite', route: '/restaurants/bbq-grill' },
        { name: 'Seafood', icon: 'fas fa-fish', route: '/restaurants/seafood' },
        { name: 'Cafes & Bakeries', icon: 'fas fa-bread-slice', route: '/restaurants/cafes-bakeries' },
        { name: 'Dessert Spots', icon: 'fas fa-ice-cream', route: '/restaurants/dessert-spots' }
      ]
    },
    {
      name: 'Automobile',
      icon: 'fas fa-car',
      dropdown: [
        { name: 'Car Rentals', icon: 'fas fa-car', route: '/businesses/car-rentals-in-dubai' },
        { name: 'Car Dealers', icon: 'fas fa-car-side', route: '/businesses/car-dealers-in-dubai' },
        { name: 'Auto Repair', icon: 'fas fa-tools', route: '/businesses/auto-repair-in-dubai' },
        { name: 'Oil Change Service', icon: 'fas fa-oil-can', route: '/businesses/oil-change-service-in-dubai' },
        { name: 'Towing Service', icon: 'fas fa-truck-pickup', route: '/businesses/towing-service-in-dubai' },
        { name: 'Parking', icon: 'fas fa-parking', route: '/businesses/parking-in-dubai' }
      ]
    },
    // {
    //   name: 'More [+]',
    //   icon: 'fas fa-ellipsis-h',
    //   dropdown: [
    //     { name: 'Item 1', icon: 'fas fa-star', route: '/more/item1' },
    //     { name: 'Item 2', icon: 'fas fa-star', route: '/more/item2' },
    //     { name: 'Item 3', icon: 'fas fa-star', route: '/more/item3' },
    //     { name: 'Item 4', icon: 'fas fa-star', route: '/more/item4' },
    //     { name: 'Item 5', icon: 'fas fa-star', route: '/more/item5' },
    //     { name: 'Item 6', icon: 'fas fa-star', route: '/more/item6' },
    //     { name: 'Item 7', icon: 'fas fa-star', route: '/more/item7' },
    //     { name: 'Item 8', icon: 'fas fa-star', route: '/more/item8' },
    //     { name: 'Item 9', icon: 'fas fa-star', route: '/more/item9' },
    //     { name: 'Item 10', icon: 'fas fa-star', route: '/more/item10' }
    //   ]
    // }
  ];

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdown = target.closest('.nav-item.dropdown');
    
    if (dropdown) {
      const dropdownMenu = dropdown.querySelector('.dropdown-menu') as HTMLElement;
      if (dropdownMenu) {
        const rect = dropdown.getBoundingClientRect();
        const menuWidth = dropdownMenu.offsetWidth;
        const windowWidth = window.innerWidth;
        
        // If dropdown would go off screen to the right
        if (rect.left + menuWidth > windowWidth) {
          dropdownMenu.classList.add('edge-aligned');
        } else {
          dropdownMenu.classList.remove('edge-aligned');
        }
      }
    }
  }
}
