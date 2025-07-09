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
  icon?: string;
}

// Place this helper function outside the class
function getMenuIconByName(name: string): string {
  const lower = name.toLowerCase();
  if (lower.includes('wheel')) return 'fas fa-steering-wheel';
  if (lower.includes('tank')) return 'fas fa-gas-pump';
  if (lower.includes('led') || lower.includes('lighting')) return 'fas fa-lightbulb';
  if (lower.includes('helmet')) return 'fas fa-hard-hat';
  if (lower.includes('silencer')) return 'fas fa-volume-down';
  // fallback
  return 'fas fa-bars';
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
    { label: '+92 316 7249265', icon: 'fas fa-phone', route: 'tel:+923167249265' },
    { label: 'Ijaz@gmail.com', icon: 'fas fa-envelope', route: 'mailto:Ijaz@gmail.com' },
    { label: 'IjazBikeStudio', route: '' }
  ];

  topBarButton = { label: 'Content with Us' };

  navMenu: NavMenuItem[] = [
    {
      name: 'Wheel',
      icon: getMenuIconByName('Wheel'),
      dropdown: [
        { name: 'CD 70 Alloy Rim', icon: 'fas fa-spa', route: '/businesses/beauty-in-dubai' },
      ]
    },
    {
      name: 'CD 70 Tanks',
      icon: getMenuIconByName('CD 70 Tanks'),
      dropdown: [
        { name: 'CD 70 Tanks', icon: 'fas fa-spa', route: '/businesses/beauty-in-dubai' },

      ]
    },
    {
      name: 'CG 125 Tanks',
      icon: getMenuIconByName('CG 125 Tanks'),
      dropdown: [
        { name: 'CG 125 Tanks', icon: 'fas fa-spa', route: '/businesses/beauty-in-dubai' },

      ]
    },
    {
      name: 'LED & Lighting',
      icon: getMenuIconByName('LED & Lighting'),
      dropdown: [
        { name: 'LED & Lighting', icon: 'fas fa-spa', route: '/businesses/beauty-in-dubai' },

      ]
    },
    {
      name: 'Helmet & Gadgets',
      icon: getMenuIconByName('Helmet & Gadgets'),
      dropdown: [
        { name: 'Helmet & Gadgets', icon: 'fas fa-spa', route: '/businesses/beauty-in-dubai' },

      ]
    },
    {
      name: 'Silencer',
      icon: getMenuIconByName('Silencer'),
      dropdown: [
        { name: 'Silencer', icon: 'fas fa-spa', route: '/businesses/beauty-in-dubai' },

      ]
    },
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
