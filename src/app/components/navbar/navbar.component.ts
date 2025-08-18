import { Component, HostListener, Input, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService, CartItem } from '../../shared.service';
import { Subscription } from 'rxjs';
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
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  private cartSubscription!: Subscription;
  @Input() disableCartDrawer = false;
  @Input() showCartIcon: boolean = true;
  @Input() showBagIcon: boolean = false;
  shipping = 500;
  currentDate = new Date();
  searchQuery: string = '';

  constructor(private router: Router, private sharedService: SharedService) { }

  topBarLinks: TopBarLink[] = [
    { label: '+92 316 7249265', icon: 'ri-phone-line', route: 'tel:+923167249265' },
    { label: 'daas@gmail.com', icon: 'ri-mail-line', route: 'mailto:daas@gmail.com' },
    { label: 'Daas Enterprises', route: '' }
  ];

  ngOnInit(): void {
    this.cartSubscription = this.sharedService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  onSearch() {
    if (this.searchQuery.trim()) { }
  }

  navMenu: NavMenuItem[] = [
    {
      name: 'Home',
      icon: 'ri-home-line',
      route: '/home',
    },
    {
      name: 'Our Product',
      icon: 'ri-box-3-line',
      route: '/ourProduct',
    },
    {
      name: 'About Us',
      icon: 'ri-information-line',
      route: '/aboutUS',
    },
    {
      name: 'Contact Us',
      icon: 'ri-mail-line',
      route: '/contactUS',
    },
  ];

  showMobileMenu = false;
  expandedMenuIndex: number | null = null;
  showCartDrawer = false;

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    if (!this.showMobileMenu) {
      this.expandedMenuIndex = null;
    }
  }

  toggleMenu(index: number) {
    if (this.expandedMenuIndex === index) {
      this.expandedMenuIndex = null;
    } else {
      this.expandedMenuIndex = index;
    }
  }

  toggleCartDrawer() {
    if (this.disableCartDrawer) return;
    this.showCartDrawer = !this.showCartDrawer;
  }

  removeCartItem(itemId: number) {
    this.sharedService.removeItem(itemId);
  }

  incrementCartQty(item: CartItem) {
    this.sharedService.updateItemQuantity(item.item.id, item.quantity + 1);
  }

  decrementCartQty(item: CartItem) {
    if (item.quantity > 1) {
      this.sharedService.updateItemQuantity(item.item.id, item.quantity - 1);
    }
  }

  onCartQtyInput(item: CartItem, value: string) {
    const parsedValue = parseInt(value, 10);
    const qty = Math.max(1, isNaN(parsedValue) ? 1 : parsedValue);
    this.sharedService.updateItemQuantity(item.item.id, qty);
  }

  get cartCount(): number {
    return this.cartItems.reduce((total, c) => total + c.quantity, 0);
  }

  getSubtotal(): number {
    return this.cartItems.reduce((sum, c) => sum + (c.item.price * c.quantity), 0);
  }

  getTotal(): number {
    return this.getSubtotal() + this.shipping;
  }

  formatPKR(amount: number): string {
    return 'PKR ' + Math.round(amount).toLocaleString('en-PK');
  }

  onCheckoutClick() {
    this.toggleCartDrawer();
    this.router.navigate(['/checkout']);
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }

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
