import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';

interface CarRental {
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

interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
}

@Component({
  selector: 'app-business-card',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.scss'
})
export class BusinessCardComponent {

  selectedCategory: Category | null = null;

  categories: Category[] = [
    { id: 1, name: 'Auto Parts Stores', icon: 'fas fa-cogs', count: 629 },
    { id: 2, name: 'Car Rentals', icon: 'fas fa-car', count: 852 },
    { id: 3, name: 'Car Service Stations', icon: 'fas fa-tools', count: 368 },
    { id: 4, name: 'Transportation Services', icon: 'fas fa-bus', count: 339 },
    { id: 5, name: 'Parking', icon: 'fas fa-parking', count: 299 },
    { id: 6, name: 'Car Dealers', icon: 'fas fa-car-side', count: 276 },
    { id: 7, name: 'Car Washing Services', icon: 'fas fa-soap', count: 259 },
    { id: 8, name: 'Used Car Dealers', icon: 'fas fa-car-alt', count: 217 },
    { id: 9, name: 'Auto Repair', icon: 'fas fa-wrench', count: 206 },
    { id: 10, name: 'Boat Rental Agency', icon: 'fas fa-ship', count: 157 },
    { id: 11, name: 'Bicycle Stores', icon: 'fas fa-bicycle', count: 155 },
    { id: 12, name: 'Used Auto Parts Stores', icon: 'fas fa-cogs', count: 149 },
    { id: 13, name: 'Limousines services', icon: 'fas fa-car-side', count: 129 },
    { id: 14, name: 'Car Tyre Stores', icon: 'fas fa-circle', count: 108 },
    { id: 15, name: 'Car Detailing Services', icon: 'fas fa-spray-can', count: 106 },
    { id: 16, name: 'Electric Vehicle Charging Stations', icon: 'fas fa-charging-station', count: 99 },
    { id: 17, name: 'Marine Supply Stores', icon: 'fas fa-anchor', count: 90 },
    { id: 18, name: 'Electric Motor Repair Shops', icon: 'fas fa-bolt', count: 73 },
    { id: 19, name: 'Auto Upholsterers', icon: 'fas fa-couch', count: 68 },
    { id: 20, name: 'Auto Body Shops', icon: 'fas fa-car-crash', count: 61 },
    { id: 21, name: 'Fuel Suppliers', icon: 'fas fa-gas-pump', count: 59 },
    { id: 22, name: 'Private Transport', icon: 'fas fa-taxi', count: 56 },
    { id: 23, name: 'Car Tuning Centers', icon: 'fas fa-tachometer-alt', count: 56 },
    { id: 24, name: 'Two wheeler store', icon: 'fas fa-motorcycle', count: 49 },
    { id: 25, name: 'Towing Service', icon: 'fas fa-truck', count: 45 },
    { id: 26, name: 'Boat Repair Shops', icon: 'fas fa-ship', count: 44 },
    { id: 27, name: 'Truck Dealers', icon: 'fas fa-truck', count: 43 },
    { id: 28, name: 'Bus Rentals', icon: 'fas fa-bus', count: 42 },
    { id: 29, name: 'Bicycle Repair Shops', icon: 'fas fa-bicycle', count: 42 },
    { id: 30, name: 'Car Stereo Stores', icon: 'fas fa-music', count: 42 },
    { id: 31, name: 'Bike Rental', icon: 'fas fa-motorcycle', count: 41 },
    { id: 32, name: 'Aircraft Maintenance Companies', icon: 'fas fa-plane', count: 37 },
    { id: 33, name: 'Vehicle Inspection Centers', icon: 'fas fa-clipboard-check', count: 35 },
    { id: 34, name: 'Racing Car Parts Stores', icon: 'fas fa-flag-checkered', count: 34 },
    { id: 35, name: 'Vehicle Shipping Companies', icon: 'fas fa-shipping-fast', count: 33 },
    { id: 36, name: 'Car battery Stores', icon: 'fas fa-battery-full', count: 33 },
    { id: 37, name: 'Car Auctions', icon: 'fas fa-gavel', count: 32 },
    { id: 38, name: 'Truck Rental Agencies', icon: 'fas fa-truck', count: 30 },
    { id: 39, name: 'Two Wheeler service stores', icon: 'fas fa-motorcycle', count: 26 },
    { id: 40, name: 'Bus & Coach Companies', icon: 'fas fa-bus', count: 24 },
    { id: 41, name: 'Auto Glass Shops', icon: 'fas fa-window-maximize', count: 21 },
    { id: 42, name: 'Aerospace Companies', icon: 'fas fa-rocket', count: 20 },
    { id: 43, name: 'Aircraft Supply Stores', icon: 'fas fa-plane', count: 17 },
    { id: 44, name: 'Aircraft Rental Agencies', icon: 'fas fa-plane', count: 15 },
    { id: 45, name: 'Electric Motor Stores', icon: 'fas fa-bolt', count: 14 },
    { id: 46, name: 'Heavy Vehicles Rentals', icon: 'fas fa-truck', count: 14 },
    { id: 47, name: 'Used Bicycle Stores', icon: 'fas fa-bicycle', count: 13 },
    { id: 48, name: 'Auto Electrical Services', icon: 'fas fa-bolt', count: 13 },
    { id: 49, name: 'Truck Repair Shops', icon: 'fas fa-truck', count: 12 },
    { id: 50, name: 'Oil Change Service', icon: 'fas fa-oil-can', count: 9 },
    { id: 51, name: 'Car Racing Tracks', icon: 'fas fa-flag-checkered', count: 8 },
    { id: 52, name: 'Car Marketplaces', icon: 'fas fa-store', count: 4 },
    { id: 53, name: 'Auto Tag Agencies', icon: 'fas fa-tag', count: 3 },
    { id: 54, name: 'Auto Wreckers', icon: 'fas fa-car-crash', count: 3 }
  ];

  allRentals: CarRental[] = [
    {
      id: 1,
      name: 'Luxury Car Rentals Dubai',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 500/day',
      rating: 4.8,
      location: 'Dubai Marina',
      city: 'Dubai',
      phone: '+971 4 123 4567',
      features: ['Luxury Cars', '24/7 Support', 'Airport Pickup', 'Free Delivery'],
      description: 'Premium luxury car rental service with a wide range of high-end vehicles.',
      categoryId: 2
    },
    {
      id: 2,
      name: 'Economy Car Rentals',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwcmVudGFsfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 150/day',
      rating: 4.5,
      location: 'Deira',
      city: 'Dubai',
      phone: '+971 4 234 5678',
      features: ['Economy Cars', 'Daily Rates', 'Insurance Included', 'Flexible Terms'],
      description: 'Affordable car rental service with well-maintained economy vehicles.',
      categoryId: 2
    },
    {
      id: 3,
      name: 'Sports Car Rentals',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 800/day',
      rating: 4.9,
      location: 'Downtown Dubai',
      city: 'Dubai',
      phone: '+971 4 345 6789',
      features: ['Sports Cars', 'Performance Models', 'Track Options', 'VIP Service'],
      description: 'Exclusive sports car rental service featuring high-performance vehicles.',
      categoryId: 2
    },
    {
      id: 4,
      name: 'Family Car Rentals',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwcmVudGFsfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 200/day',
      rating: 4.6,
      location: 'Al Barsha',
      city: 'Dubai',
      phone: '+971 4 456 7890',
      features: ['Family Cars', 'Child Seats', 'Spacious SUVs', 'Long-term Options'],
      description: 'Family-friendly car rental service with spacious and comfortable vehicles.',
      categoryId: 2
    },
    {
      id: 5,
      name: 'Dubai Auto Parts Center',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0byUyMHBhcnRzfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 100-1000',
      rating: 4.7,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 345 6789',
      features: ['Genuine Parts', 'Wide Selection', 'Expert Advice', 'Warranty'],
      description: 'Comprehensive auto parts store with genuine parts for all car makes and models.',
      categoryId: 1
    },
    {
      id: 6,
      name: 'Gulf Auto Parts',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0byUyMHBhcnRzfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 50-800',
      rating: 4.5,
      location: 'Deira',
      city: 'Dubai',
      phone: '+971 4 456 7890',
      features: ['Aftermarket Parts', 'Competitive Prices', 'Fast Delivery', 'Technical Support'],
      description: 'Leading supplier of quality aftermarket auto parts and accessories.',
      categoryId: 1
    },
    {
      id: 7,
      name: 'Premium Car Service',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 200-500',
      rating: 4.8,
      location: 'Business Bay',
      city: 'Dubai',
      phone: '+971 4 567 8901',
      features: ['Regular Maintenance', 'Engine Repair', 'Electrical Service', 'Diagnostics'],
      description: 'Professional car service center with certified technicians and state-of-the-art equipment.',
      categoryId: 3
    },
    {
      id: 8,
      name: 'Express Auto Service',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 150-400',
      rating: 4.6,
      location: 'Al Barsha',
      city: 'Dubai',
      phone: '+971 4 678 9012',
      features: ['Quick Service', 'Oil Change', 'Brake Service', 'Tire Rotation'],
      description: 'Fast and reliable car service with quick turnaround times.',
      categoryId: 3
    },
    {
      id: 9,
      name: 'Dubai Luxury Motors',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 200,000+',
      rating: 4.9,
      location: 'Dubai Mall',
      city: 'Dubai',
      phone: '+971 4 789 0123',
      features: ['Luxury Brands', 'New Models', 'Financing Options', 'Trade-in'],
      description: 'Premium car dealership offering luxury and high-end vehicles.',
      categoryId: 6
    },
    {
      id: 10,
      name: 'Gulf Auto Mall',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwcmVudGFsfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 50,000+',
      rating: 4.7,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 890 1234',
      features: ['Multiple Brands', 'Family Cars', 'SUV Range', 'Test Drive'],
      description: 'Family-oriented car dealership with a wide range of vehicles.',
      categoryId: 6
    },
    {
      id: 11,
      name: 'Sparkle Car Wash',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwd2FzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 50-150',
      rating: 4.8,
      location: 'Dubai Marina',
      city: 'Dubai',
      phone: '+971 4 901 2345',
      features: ['Exterior Wash', 'Interior Cleaning', 'Polishing', 'Detailing'],
      description: 'Premium car washing and detailing service with attention to detail.',
      categoryId: 7
    },
    {
      id: 12,
      name: 'Quick Clean Auto',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwd2FzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 30-100',
      rating: 4.5,
      location: 'Deira',
      city: 'Dubai',
      phone: '+971 4 012 3456',
      features: ['Express Wash', 'Vacuum', 'Window Cleaning', 'Tire Shine'],
      description: 'Fast and efficient car washing service at competitive prices.',
      categoryId: 7
    },
    {
      id: 13,
      name: 'Pre-Owned Auto Center',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlZCUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 20,000+',
      rating: 4.6,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 123 4567',
      features: ['Certified Used Cars', 'Warranty', 'Financing', 'History Check'],
      description: 'Trusted dealer of quality pre-owned vehicles with comprehensive checks.',
      categoryId: 8
    },
    {
      id: 14,
      name: 'Budget Cars Dubai',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlZCUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 15,000+',
      rating: 4.4,
      location: 'Deira',
      city: 'Dubai',
      phone: '+971 4 234 5678',
      features: ['Affordable Cars', 'Quality Check', 'Easy Finance', 'Trade-in'],
      description: 'Budget-friendly used car dealership with quality vehicles.',
      categoryId: 8
    },
    {
      id: 15,
      name: 'Dubai Transport Solutions',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhbnNwb3J0fGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 100-500',
      rating: 4.7,
      location: 'Business Bay',
      city: 'Dubai',
      phone: '+971 4 345 6789',
      features: ['Corporate Transport', 'Airport Transfer', 'City Tours', 'VIP Service'],
      description: 'Professional transportation services for corporate and private clients.',
      categoryId: 4
    },
    {
      id: 16,
      name: 'Express Transport',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhbnNwb3J0fGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 50-300',
      rating: 4.5,
      location: 'Deira',
      city: 'Dubai',
      phone: '+971 4 456 7890',
      features: ['Quick Service', '24/7 Available', 'Fixed Rates', 'Online Booking'],
      description: 'Reliable and efficient transportation services across Dubai.',
      categoryId: 4
    },
    {
      id: 17,
      name: 'Secure Parking Dubai',
      image: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya2luZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 20-100/day',
      rating: 4.6,
      location: 'Downtown Dubai',
      city: 'Dubai',
      phone: '+971 4 567 8901',
      features: ['24/7 Security', 'Covered Parking', 'Monthly Plans', 'Valet Service'],
      description: 'Secure and convenient parking facilities in prime locations.',
      categoryId: 5
    },
    {
      id: 18,
      name: 'Smart Parking Solutions',
      image: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya2luZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 15-80/day',
      rating: 4.4,
      location: 'Dubai Marina',
      city: 'Dubai',
      phone: '+971 4 678 9012',
      features: ['Smart Access', 'App Booking', 'Hourly Rates', 'EV Charging'],
      description: 'Modern parking solutions with smart technology integration.',
      categoryId: 5
    },
    {
      id: 19,
      name: 'Expert Auto Repair',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0byUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 100-1000',
      rating: 4.8,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 789 0123',
      features: ['Engine Repair', 'Transmission', 'Electrical', 'Diagnostics'],
      description: 'Professional auto repair service with certified mechanics.',
      categoryId: 9
    },
    {
      id: 20,
      name: 'Quick Fix Auto',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0byUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 50-500',
      rating: 4.6,
      location: 'Deira',
      city: 'Dubai',
      phone: '+971 4 890 1234',
      features: ['Quick Service', 'Mobile Repair', 'Warranty', 'Free Inspection'],
      description: 'Fast and reliable auto repair service with mobile support.',
      categoryId: 9
    },
    {
      id: 21,
      name: 'Dubai Marine Adventures',
      image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hdCUyMHJlbnRhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 500-2000',
      rating: 4.9,
      location: 'Dubai Marina',
      city: 'Dubai',
      phone: '+971 4 901 2345',
      features: ['Luxury Yachts', 'Fishing Boats', 'Crew Service', 'Water Sports'],
      description: 'Premium boat rental service with luxury yachts and water activities.',
      categoryId: 10
    },
    {
      id: 22,
      name: 'Gulf Boat Rentals',
      image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hdCUyMHJlbnRhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 300-1500',
      rating: 4.7,
      location: 'Jumeirah',
      city: 'Dubai',
      phone: '+971 4 012 3456',
      features: ['Family Boats', 'Ski Boats', 'Party Boats', 'Fishing Trips'],
      description: 'Family-friendly boat rental service with various options.',
      categoryId: 10
    },
    {
      id: 23,
      name: 'Cycle World Dubai',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 500-5000',
      rating: 4.6,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 123 4567',
      features: ['Mountain Bikes', 'Road Bikes', 'Accessories', 'Service'],
      description: 'Premium bicycle store with wide range of bikes and accessories.',
      categoryId: 11
    },
    {
      id: 24,
      name: 'City Cycles',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 300-3000',
      rating: 4.5,
      location: 'Dubai Mall',
      city: 'Dubai',
      phone: '+971 4 234 5678',
      features: ['Urban Bikes', 'Electric Bikes', 'Repair', 'Rental'],
      description: 'Urban bicycle store specializing in city and electric bikes.',
      categoryId: 11
    },
    {
      id: 25,
      name: 'Recycle Auto Parts',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0byUyMHBhcnRzfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 20-500',
      rating: 4.4,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 345 6789',
      features: ['Used Parts', 'Core Exchange', 'Warranty', 'Installation'],
      description: 'Quality used auto parts with warranty and installation service.',
      categoryId: 12
    },
    {
      id: 26,
      name: 'Budget Auto Parts',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0byUyMHBhcnRzfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 10-300',
      rating: 4.3,
      location: 'Deira',
      city: 'Dubai',
      phone: '+971 4 456 7890',
      features: ['Affordable Parts', 'Wide Selection', 'Quick Delivery', 'Expert Advice'],
      description: 'Budget-friendly used auto parts with quality guarantee.',
      categoryId: 12
    },
    {
      id: 27,
      name: 'Royal Limousine Dubai',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGltb3VzaW5lfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 300-1000',
      rating: 4.9,
      location: 'Downtown Dubai',
      city: 'Dubai',
      phone: '+971 4 567 8901',
      features: ['Luxury Cars', 'Professional Drivers', 'Airport Transfer', 'VIP Service'],
      description: 'Premium limousine service for special occasions and corporate events.',
      categoryId: 13
    },
    {
      id: 28,
      name: 'Elite Limo Service',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGltb3VzaW5lfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 250-800',
      rating: 4.8,
      location: 'Dubai Marina',
      city: 'Dubai',
      phone: '+971 4 678 9012',
      features: ['Wedding Cars', 'Corporate Events', 'City Tours', 'Hourly Service'],
      description: 'Elegant limousine service for weddings and special events.',
      categoryId: 13
    },
    {
      id: 29,
      name: 'Tyre World Dubai',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 200-2000',
      rating: 4.7,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 789 0123',
      features: ['All Brands', 'Tire Fitting', 'Wheel Alignment', 'Balance'],
      description: 'Comprehensive tire store with professional fitting service.',
      categoryId: 14
    },
    {
      id: 30,
      name: 'Quick Tire Service',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 150-1500',
      rating: 4.6,
      location: 'Deira',
      city: 'Dubai',
      phone: '+971 4 890 1234',
      features: ['Fast Service', 'Mobile Fitting', 'Tire Repair', 'Pressure Check'],
      description: 'Quick and reliable tire service with mobile fitting available.',
      categoryId: 14
    },
    {
      id: 41,
      name: 'Dubai Auto Body Works',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0byUyMGJvZHklMjBzaG9wfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 500-3000',
      rating: 4.8,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 901 2345',
      features: ['Collision Repair', 'Paint Work', 'Panel Beating', 'Insurance Claims'],
      description: 'Professional auto body repair and paint service.',
      categoryId: 20
    },
    {
      id: 42,
      name: 'Elite Body Shop',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0byUyMGJvZHklMjBzaG9wfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 400-2500',
      rating: 4.7,
      location: 'Deira',
      city: 'Dubai',
      phone: '+971 4 012 3456',
      features: ['Dent Removal', 'Paint Matching', 'Frame Repair', 'Rust Treatment'],
      description: 'Specialized auto body repair with paint matching technology.',
      categoryId: 20
    },
    {
      id: 43,
      name: 'Gulf Fuel Solutions',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVlbCUyMHN1cHBsaWVyfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 2.5-3.5/L',
      rating: 4.6,
      location: 'Jebel Ali',
      city: 'Dubai',
      phone: '+971 4 123 4567',
      features: ['Bulk Supply', 'Fleet Service', '24/7 Delivery', 'Quality Fuel'],
      description: 'Reliable fuel supply service for businesses and fleets.',
      categoryId: 21
    },
    {
      id: 44,
      name: 'Dubai Fuel Services',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVlbCUyMHN1cHBsaWVyfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 2.4-3.4/L',
      rating: 4.5,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 234 5678',
      features: ['Corporate Supply', 'Emergency Service', 'Fuel Cards', 'Monitoring'],
      description: 'Corporate fuel supply with monitoring and management services.',
      categoryId: 21
    },
    {
      id: 45,
      name: 'VIP Transport Dubai',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpdmF0ZSUyMHRyYW5zcG9ydHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 200-1000',
      rating: 4.9,
      location: 'Downtown Dubai',
      city: 'Dubai',
      phone: '+971 4 345 6789',
      features: ['Luxury Vehicles', 'Professional Drivers', 'Airport Transfer', 'City Tours'],
      description: 'Premium private transport service with luxury vehicles.',
      categoryId: 22
    },
    {
      id: 46,
      name: 'Elite Private Cars',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpdmF0ZSUyMHRyYW5zcG9ydHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 150-800',
      rating: 4.8,
      location: 'Dubai Marina',
      city: 'Dubai',
      phone: '+971 4 456 7890',
      features: ['Corporate Transport', 'Wedding Cars', 'VIP Service', 'Hourly Rates'],
      description: 'Exclusive private transport service for special occasions.',
      categoryId: 22
    },
    {
      id: 47,
      name: 'Dubai Performance Tuning',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwdHVuaW5nfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 1000-5000',
      rating: 4.9,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 567 8901',
      features: ['Engine Tuning', 'ECU Remapping', 'Performance Parts', 'Dyno Testing'],
      description: 'Professional car tuning and performance enhancement center.',
      categoryId: 23
    },
    {
      id: 48,
      name: 'Elite Auto Tuning',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwdHVuaW5nfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 800-4000',
      rating: 4.8,
      location: 'Deira',
      city: 'Dubai',
      phone: '+971 4 678 9012',
      features: ['Custom Tuning', 'Turbo Upgrades', 'Exhaust Systems', 'Suspension'],
      description: 'Specialized car tuning service with custom solutions.',
      categoryId: 23
    },
    {
      id: 49,
      name: 'Dubai Motorcycle World',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3JjeWNsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 5000-50000',
      rating: 4.7,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 789 0123',
      features: ['New Models', 'Used Bikes', 'Parts', 'Service'],
      description: 'Comprehensive motorcycle store with sales and service.',
      categoryId: 24
    },
    {
      id: 50,
      name: 'Gulf Bike Store',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3JjeWNsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 3000-40000',
      rating: 4.6,
      location: 'Deira',
      city: 'Dubai',
      phone: '+971 4 890 1234',
      features: ['Sport Bikes', 'Cruisers', 'Scooters', 'Accessories'],
      description: 'Wide range of motorcycles and accessories available.',
      categoryId: 24
    },
    {
      id: 51,
      name: 'Dubai Towing Services',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG93aW5nfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 100-500',
      rating: 4.8,
      location: 'Dubai',
      city: 'Dubai',
      phone: '+971 4 901 2345',
      features: ['24/7 Service', 'Quick Response', 'All Vehicles', 'Insurance Claims'],
      description: 'Reliable towing service available 24/7 across Dubai.',
      categoryId: 25
    },
    {
      id: 52,
      name: 'Express Towing',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG93aW5nfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 80-400',
      rating: 4.7,
      location: 'Dubai',
      city: 'Dubai',
      phone: '+971 4 012 3456',
      features: ['Fast Response', 'GPS Tracking', 'Heavy Vehicles', 'Roadside Assistance'],
      description: 'Quick and efficient towing service with GPS tracking.',
      categoryId: 25
    },
    {
      id: 53,
      name: 'Dubai Marine Repairs',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hdCUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 500-5000',
      rating: 4.8,
      location: 'Dubai Marina',
      city: 'Dubai',
      phone: '+971 4 123 4567',
      features: ['Engine Repair', 'Hull Repair', 'Electrical', 'Maintenance'],
      description: 'Professional boat repair and maintenance service.',
      categoryId: 26
    },
    {
      id: 54,
      name: 'Gulf Boat Services',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hdCUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 400-4000',
      rating: 4.7,
      location: 'Jumeirah',
      city: 'Dubai',
      phone: '+971 4 234 5678',
      features: ['Yacht Service', 'Engine Overhaul', 'Fiberglass Repair', 'Winterization'],
      description: 'Specialized boat repair service for yachts and pleasure crafts.',
      categoryId: 26
    },
    {
      id: 55,
      name: 'Dubai Truck Center',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJ1Y2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      price: 'AED 100000+',
      rating: 4.7,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 345 6789',
      features: ['New Trucks', 'Used Trucks', 'Parts', 'Service'],
      description: 'Comprehensive truck dealership with sales and service.',
      categoryId: 27
    },
    {
      id: 56,
      name: 'Gulf Heavy Vehicles',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJ1Y2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      price: 'AED 80000+',
      rating: 4.6,
      location: 'Deira',
      city: 'Dubai',
      phone: '+971 4 456 7890',
      features: ['Commercial Trucks', 'Construction Vehicles', 'Financing', 'Maintenance'],
      description: 'Specialized dealer in commercial and construction vehicles.',
      categoryId: 27
    },
    {
      id: 57,
      name: 'Dubai Bus Services',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 1000-5000/day',
      rating: 4.8,
      location: 'Dubai',
      city: 'Dubai',
      phone: '+971 4 567 8901',
      features: ['School Buses', 'Tour Buses', 'Corporate Transport', 'Events'],
      description: 'Professional bus rental service for various needs.',
      categoryId: 28
    },
    {
      id: 58,
      name: 'Gulf Bus Rentals',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 800-4000/day',
      rating: 4.7,
      location: 'Dubai',
      city: 'Dubai',
      phone: '+971 4 678 9012',
      features: ['Luxury Buses', 'Airport Transfer', 'City Tours', 'Driver Service'],
      description: 'Premium bus rental service with professional drivers.',
      categoryId: 28
    },
    {
      id: 59,
      name: 'Dubai Cycle Service',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZSUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 50-300',
      rating: 4.7,
      location: 'Dubai Mall',
      city: 'Dubai',
      phone: '+971 4 789 0123',
      features: ['Repair', 'Maintenance', 'Parts', 'Tuning'],
      description: 'Professional bicycle repair and maintenance service.',
      categoryId: 29
    },
    {
      id: 60,
      name: 'Cycle Care Center',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZSUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 40-250',
      rating: 4.6,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 890 1234',
      features: ['Quick Service', 'Electric Bikes', 'Accessories', 'Custom Builds'],
      description: 'Specialized bicycle repair with quick turnaround.',
      categoryId: 29
    },
    {
      id: 61,
      name: 'Dubai Audio Center',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwc3RlcmVvfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 500-5000',
      rating: 4.8,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 901 2345',
      features: ['Car Audio', 'Installation', 'Custom Systems', 'Accessories'],
      description: 'Premium car audio installation and sales center.',
      categoryId: 30
    },
    {
      id: 62,
      name: 'Elite Car Audio',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwc3RlcmVvfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 400-4000',
      rating: 4.7,
      location: 'Deira',
      city: 'Dubai',
      phone: '+971 4 012 3456',
      features: ['Sound Systems', 'Navigation', 'Security', 'LED Lighting'],
      description: 'Specialized car audio and electronics installation.',
      categoryId: 30
    },
    {
      id: 63,
      name: 'Dubai Auto Parts Center',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0byUyMHBhcnRzfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 100-1000',
      rating: 4.7,
      location: 'Al Quoz',
      city: 'Dubai',
      phone: '+971 4 345 6789',
      features: ['Genuine Parts', 'Wide Selection', 'Expert Advice', 'Warranty'],
      description: 'Comprehensive auto parts store with genuine parts for all car makes and models.',
      categoryId: 1
    },
    {
      id: 64,
      name: 'Gulf Auto Parts',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0byUyMHBhcnRzfGVufDB8fDB8fHww&w=1000&q=80',
      price: 'AED 50-800',
      rating: 4.5,
      location: 'Deira',
      city: 'Dubai',
      phone: '+971 4 456 7890',
      features: ['Aftermarket Parts', 'Competitive Prices', 'Fast Delivery', 'Technical Support'],
      description: 'Leading supplier of quality aftermarket auto parts and accessories.',
      categoryId: 1
    },
    {
      id: 65,
      name: 'Premium Car Service',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 200-500',
      rating: 4.8,
      location: 'Business Bay',
      city: 'Dubai',
      phone: '+971 4 567 8901',
      features: ['Regular Maintenance', 'Engine Repair', 'Electrical Service', 'Diagnostics'],
      description: 'Professional car service center with certified technicians and state-of-the-art equipment.',
      categoryId: 3
    },
    {
      id: 66,
      name: 'Express Auto Service',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 'AED 150-400',
      rating: 4.6,
      location: 'Al Barsha',
      city: 'Dubai',
      phone: '+971 4 678 9012',
      features: ['Quick Service', 'Oil Change', 'Brake Service', 'Tire Rotation'],
      description: 'Fast and reliable car service with quick turnaround times.',
      categoryId: 3
    }
  ];

  get carRentals(): CarRental[] {
    if (!this.selectedCategory) {
      return this.allRentals;
    }
    return this.allRentals.filter(rental => rental.categoryId === this.selectedCategory?.id);
  }

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

  viewDetails(rental: CarRental) {
    // Implement view details functionality
    console.log('View details for:', rental.name);
  }

  enquireNow(rental: CarRental) {
    // Implement enquiry functionality
    console.log('Enquire about:', rental.name);
  }
} 
