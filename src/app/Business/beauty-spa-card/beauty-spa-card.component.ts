import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CommonModule } from '@angular/common';

interface Category {
  id: number;
  name: string;
  count: number;
  icon: string;
}

interface BusinessCard {
  id: number;
  name: string;
  image: string;
  rating: number;
  location: string;
  city: string;
  phone: string;
  features: string[];
  categoryId: number;
  price: string;
}

@Component({
  selector: 'app-beauty-spa-card',
  templateUrl: './beauty-spa-card.component.html',
  styleUrls: ['./beauty-spa-card.component.scss'],
  imports: [NavbarComponent, CommonModule],
  standalone: true
})
export class BeautySpaCardComponent implements OnInit {
  categories: Category[] = [
    { id: 1, name: 'Perfume Stores', count: 675, icon: 'fas fa-spray-can' },
    { id: 2, name: 'Beauty Salons', count: 558, icon: 'fas fa-cut' },
    { id: 3, name: 'Cosmetic Stores', count: 519, icon: 'fas fa-pump-soap' },
    { id: 4, name: "Men's Salon", count: 470, icon: 'fas fa-user-tie' },
    { id: 5, name: 'Beauty Parlours', count: 310, icon: 'fas fa-store' },
    { id: 6, name: 'Massage Centers', count: 247, icon: 'fas fa-hands' },
    { id: 7, name: 'Hairdressers', count: 178, icon: 'fas fa-cut' },
    { id: 8, name: 'Spa Centers', count: 177, icon: 'fas fa-spa' },
    { id: 9, name: 'Beauty Product Suppliers', count: 133, icon: 'fas fa-truck' },
    { id: 10, name: "Women's Salon", count: 111, icon: 'fas fa-female' },
    { id: 11, name: 'Laser Treatments', count: 97, icon: 'fas fa-laser' },
    { id: 12, name: 'Nails Salons', count: 90, icon: 'fas fa-hand-sparkles' }
  ];

  businessCards: BusinessCard[] = [
    // Perfume Stores
    {
      id: 1,
      name: 'Arabian Perfumes',
      image: 'assets/images/perfume.jpg',
      rating: 4.9,
      location: 'Dubai Mall',
      city: 'Dubai',
      phone: '+971 4 345 6789',
      features: ['Luxury Perfumes', 'Oud', 'Custom Scents', 'Gift Sets'],
      categoryId: 1,
      price: 'AED 100-2000'
    },
    {
      id: 2,
      name: 'Royal Fragrances',
      image: 'assets/images/perfume2.jpg',
      rating: 4.8,
      location: 'Mall of Emirates',
      city: 'Dubai',
      phone: '+971 4 456 7890',
      features: ['International Brands', 'Arabic Scents', 'Perfume Making', 'VIP Service'],
      categoryId: 1,
      price: 'AED 200-3000'
    },
    // Beauty Salons
    {
      id: 3,
      name: 'Elite Beauty Salon',
      image: 'assets/images/salon.jpg',
      rating: 4.8,
      location: 'City Walk',
      city: 'Dubai',
      phone: '+971 4 456 7890',
      features: ['Hair Styling', 'Makeup', 'Skin Care', 'Bridal Services'],
      categoryId: 2,
      price: 'AED 150-800'
    },
    // Cosmetic Stores
    {
      id: 4,
      name: 'Glamour Cosmetics',
      image: 'assets/images/cosmetics.jpg',
      rating: 4.6,
      location: 'Mall of Emirates',
      city: 'Dubai',
      phone: '+971 4 567 8901',
      features: ['Makeup', 'Skincare', 'Fragrances', 'Beauty Tools'],
      categoryId: 3,
      price: 'AED 50-500'
    },
    // Men's Salon
    {
      id: 5,
      name: 'Gentlemen\'s Grooming',
      image: 'assets/images/mens-salon.jpg',
      rating: 4.7,
      location: 'Business Bay',
      city: 'Dubai',
      phone: '+971 4 678 9012',
      features: ['Haircut', 'Shave', 'Facial', 'Massage'],
      categoryId: 4,
      price: 'AED 100-400'
    },
    // Beauty Parlours
    {
      id: 6,
      name: 'Royal Beauty Parlour',
      image: 'assets/images/parlour.jpg',
      rating: 4.7,
      location: 'Jumeirah',
      city: 'Dubai',
      phone: '+971 4 789 0123',
      features: ['Hair Care', 'Skin Treatments', 'Nail Art', 'Bridal Makeup'],
      categoryId: 5,
      price: 'AED 200-1000'
    },
    // Massage Centers
    {
      id: 7,
      name: 'Tranquility Massage',
      image: 'assets/images/massage.jpg',
      rating: 4.8,
      location: 'Downtown Dubai',
      city: 'Dubai',
      phone: '+971 4 890 1234',
      features: ['Swedish Massage', 'Deep Tissue', 'Aromatherapy', 'Hot Stone'],
      categoryId: 6,
      price: 'AED 200-800'
    },
    // Hairdressers
    {
      id: 8,
      name: 'Style Studio',
      image: 'assets/images/hairdresser.jpg',
      rating: 4.7,
      location: 'Dubai Marina',
      city: 'Dubai',
      phone: '+971 4 901 2345',
      features: ['Haircuts', 'Coloring', 'Styling', 'Extensions'],
      categoryId: 7,
      price: 'AED 150-600'
    },
    // Spa Centers
    {
      id: 9,
      name: 'Dubai Luxury Spa',
      image: 'assets/images/spa.jpg',
      rating: 4.8,
      location: 'Downtown Dubai',
      city: 'Dubai',
      phone: '+971 4 123 4567',
      features: ['Massage', 'Facial', 'Body Treatment', 'Steam Room'],
      categoryId: 8,
      price: 'AED 200-1000'
    },
    // Beauty Product Suppliers
    {
      id: 10,
      name: 'Beauty Supply Co.',
      image: 'assets/images/supplier.jpg',
      rating: 4.6,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 234 5678',
      features: ['Wholesale', 'Retail', 'Professional Products', 'Equipment'],
      categoryId: 9,
      price: 'AED 50-5000'
    },
    // Women's Salon
    {
      id: 11,
      name: 'Ladies Beauty Lounge',
      image: 'assets/images/womens-salon.jpg',
      rating: 4.8,
      location: 'City Walk',
      city: 'Dubai',
      phone: '+971 4 345 6789',
      features: ['Hair Styling', 'Makeup', 'Nail Care', 'Skin Treatments'],
      categoryId: 10,
      price: 'AED 200-900'
    },
    // Laser Treatments
    {
      id: 12,
      name: 'Skin & Laser Clinic',
      image: 'assets/images/laser.jpg',
      rating: 4.9,
      location: 'Dubai Healthcare City',
      city: 'Dubai',
      phone: '+971 4 456 7890',
      features: ['Hair Removal', 'Skin Rejuvenation', 'Acne Treatment', 'Anti-aging'],
      categoryId: 11,
      price: 'AED 300-2000'
    },
    // Nails Salons
    {
      id: 13,
      name: 'Nail Art Studio',
      image: 'assets/images/nails.jpg',
      rating: 4.7,
      location: 'Dubai Mall',
      city: 'Dubai',
      phone: '+971 4 567 8901',
      features: ['Manicure', 'Pedicure', 'Nail Art', 'Gel Polish'],
      categoryId: 12,
      price: 'AED 100-400'
    }
  ];

  selectedCategory: Category | null = null;

  constructor() { }

  ngOnInit(): void { }

  selectCategory(category: Category): void {
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
    while (stars.length < 5) {
      stars.push('far fa-star');
    }
    return stars;
  }

  viewDetails(card: BusinessCard): void {
    // Implement view details functionality
    console.log('View details:', card);
  }

  enquireNow(card: BusinessCard): void {
    // Implement enquiry functionality
    console.log('Enquire now:', card);
  }
} 