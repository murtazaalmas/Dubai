import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService, CategorySection } from '../../shared.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-our-product',
  standalone: true,
  imports: [CommonModule, PopupComponent, FormsModule],
  templateUrl: './our-product.component.html',
  styleUrls: ['./our-product.component.scss']
})
export class OurProductComponent implements OnInit {

  allProducts: CategorySection[] = [];
  products: CategorySection[] = [];
  categories: string[] = [];

  selectedCategory: string = 'all';
  sortBy: string = 'name-asc';


  showPopup = false;
  selectedProduct: CategorySection | null = null;

  constructor(private sharedService: SharedService) { }


  ngOnInit(): void {
    this.allProducts = this.sharedService.getCategorySection();
    this.categories = [...new Set(this.allProducts.map(p => p.categories))];
    this.applyFilters();
  }

  onCategoryChange(): void {
    this.applyFilters();
  }

  onSortChange(): void {
    this.applyFilters();
  }


  applyFilters(): void {
    let filteredProducts = this.allProducts;

    // Filter by category
    if (this.selectedCategory !== 'all') {
      filteredProducts = filteredProducts.filter(p => p.categories === this.selectedCategory);
    }

    // Sort products
    filteredProducts.sort((a, b) => {
      if (this.sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      } else if (this.sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

    this.products = filteredProducts;
  }





  openPopup(product: CategorySection): void {
    this.selectedProduct = product;
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
    this.selectedProduct = null;
  }

  addToCart(event: { item: CategorySection, quantity: number }): void {
    this.sharedService.addToCart(event.item, event.quantity);
    this.closePopup();
  }

}
