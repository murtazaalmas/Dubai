import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';

interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
}

interface BeautySpa {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  location: string;
  city: string;
  phone: string;
  features: string[];
  description: string;
  categoryId: number;
}

@Component({
  selector: 'app-beauty-spa-card',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './beauty-spa-card.component.html',
  styleUrl: './beauty-spa-card.component.scss'
})
export class BeautySpaCardComponent {
  selectedCategory: Category | null = null;

  categories: Category[] = [
    { id: 1, name: 'Spa Centers', icon: 'fas fa-spa', count: 150 },
    { id: 2, name: 'Massage Centers', icon: 'fas fa-hands', count: 200 },
    { id: 3, name: 'Beauty Salons', icon: 'fas fa-cut', count: 300 },
    { id: 4, name: 'Perfume Stores', icon: 'fas fa-spray-can-sparkles', count: 120 },
    { id: 5, name: 'Cosmetic Stores', icon: 'fas fa-pump-soap', count: 180 },
    { id: 6, name: 'Laser Treatments', icon: 'fas fa-wand-magic-sparkles', count: 90 },
    { id: 7, name: 'Nails Salons', icon: 'fas fa-hand-sparkles', count: 250 },
    { id: 8, name: 'Women\'s Salon', icon: 'fas fa-female', count: 280 },
    { id: 9, name: 'Men\'s Salon', icon: 'fas fa-male', count: 150 }
  ];

  beautySpas: BeautySpa[] = [
    {
      id: 1,
      name: 'Luxury Spa & Wellness',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 200-1000',
      rating: 4.8,
      location: 'Downtown Dubai',
      city: 'Dubai',
      phone: '+971 4 123 4567',
      features: ['Massage', 'Facial', 'Body Treatment', 'Steam Room'],
      description: 'Luxury spa offering premium wellness treatments and relaxation services.',
      categoryId: 1
    },
    {
      id: 2,
      name: 'Zen Massage Center',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzc2FnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 150-500',
      rating: 4.7,
      location: 'Dubai Marina',
      city: 'Dubai',
      phone: '+971 4 234 5678',
      features: ['Thai Massage', 'Deep Tissue', 'Reflexology', 'Aromatherapy'],
      description: 'Professional massage center specializing in various massage techniques.',
      categoryId: 2
    },
    {
      id: 3,
      name: 'Glamour Beauty Salon',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      price: 'AED 100-800',
      rating: 4.6,
      location: 'Jumeirah',
      city: 'Dubai',
      phone: '+971 4 345 6789',
      features: ['Hair Styling', 'Makeup', 'Facial', 'Manicure'],
      description: 'Full-service beauty salon offering comprehensive beauty treatments.',
      categoryId: 3
    }
  ];

  selectCategory(category: Category) {
    this.selectedCategory = category;
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

  viewDetails(spa: BeautySpa) {
    // Implement view details functionality
    console.log('View details for:', spa.name);
  }

  enquireNow(spa: BeautySpa) {
    // Implement enquiry functionality
    console.log('Enquire about:', spa.name);
  }
} 