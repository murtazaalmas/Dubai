import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from '../wheel/popup.component';
import { SharedService, CategorySection } from '../../shared.service';


@Component({
  selector: 'app-cd70tanks',
  imports: [CommonModule, FormsModule, NavbarComponent, PopupComponent],
  standalone: true,
  templateUrl: './cd70tanks.component.html',
  styleUrl: './cd70tanks.component.scss'
})
export class CD70TanksComponent implements OnInit {
  categorySections: CategorySection[] = [];

  selectedView = 1; // 1 to 5 columns
  selectedTab = 1;
  selectedSort: string = 'lowToHigh';

  showPopup: boolean = false;
  popupCategory: CategorySection | null = null;
  cartItems: { item: CategorySection, quantity: number }[] = [];
  showToast = false;
  toastMessage = '';

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.categorySections = this.sharedService.getCD70CategorySections();
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
  }

  saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  setTab(tab: number) {
    this.selectedTab = tab;
  }

  setView(cols: number) {
    this.selectedView = cols;
  }

  get filteredCategories() {
    let filtered = this.categorySections.filter(c => c.id === this.selectedTab);
    if (this.selectedSort === 'lowToHigh') {
      filtered = filtered.slice().sort((a, b) => a.price - b.price);
    } else if (this.selectedSort === 'highToLow') {
      filtered = filtered.slice().sort((a, b) => b.price - a.price);
    }
    return filtered;
  }

  openPopup(category: CategorySection) {
    this.popupCategory = category;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.popupCategory = null;
  }

  onAddCartItem(event: { item: CategorySection, quantity: number }) {
    const existing = this.cartItems.find(ci => ci.item.id === event.item.id && ci.item.name === event.item.name);
    if (existing) {
      existing.quantity += event.quantity;
    } else {
      this.cartItems.push({ item: event.item, quantity: event.quantity });
    }
    this.saveCart();
    this.showToastMessage(`${event.item.name} added to cart!`);
    this.closePopup(); // Optionally close popup after adding
  }

  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 2000);
  }

  incrementCartQty(index: number) {
    this.cartItems[index].quantity++;
    this.saveCart();
  }

  decrementCartQty(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.saveCart();
    }
  }

  onCartQtyInput(index: number, value: string) {
    const qty = Math.max(1, parseInt(value, 10) || 1);
    this.cartItems[index].quantity = qty;
    this.saveCart();
  }

  removeCartItem(index: number) {
    this.cartItems.splice(index, 1);
    this.saveCart();
  }
}
