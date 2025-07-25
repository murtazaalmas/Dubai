import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
}

interface CardItem {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  location: string;
  city: string;
  phone: string;
  features: string[];
  description: string;
  categoryId: number;
}

@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.scss'
})
export class CardSectionComponent {
  @Input() categories: Category[] = [];
  @Input() cardItems: CardItem[] = [];
  @Input() title: string = 'Card Section Title';
  @Input() description: string = 'Card Section Description';
  @Input() heroBgImage: string = '';
  @Output() categorySelect = new EventEmitter<Category>();

  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.categorySelect.emit(category);
  }

  getRatingStars(rating: number): string[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('fas fa-star');
    }
    if (hasHalfStar) {
      stars.push('fas fa-star-half-alt');
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push('far fa-star');
    }

    return stars;
  }

  viewDetails(item: CardItem) {
    // Implement view details functionality
    console.log('View details for:', item.name);
  }

  enquireNow(item: CardItem) {
    // Implement enquiry functionality
    console.log('Enquire about:', item.name);
  }
} 