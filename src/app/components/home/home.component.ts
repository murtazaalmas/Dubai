import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

interface DubaiLocation {
  value: string;
  label: string;
}

interface Category {
  icon: string;
  name: string;
}

interface CategorySection {
  image: string;
  name: string;
}

interface RecentBusiness {
  image: string;
  name: string;
}

interface CategoryListItem {
  name: string;
  link: string;
}

interface CategoryList {
  heading: string;
  items: CategoryListItem[];
}

interface FeatureSection {
  image: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  isDragging = false;
  startPos = 0;
  prevTranslate = 0;
  dubaiCards: any[] = [];

  categoryLists: CategoryList[] = [
    {
      heading: 'Beauty & Spa',
      items: [
        { name: 'Spa Centers', link: '#' },
        { name: 'Massage Centers', link: '#' }
      ]
    },
    {
      heading: 'Restaurants',
      items: [
        { name: 'Indian Food', link: '#' },
        { name: 'Asian Food', link: '#' }
      ]
    },
    {
      heading: 'Nightlife',
      items: [
        { name: 'Clubs', link: '#' },
        { name: 'Bars', link: '#' }
      ]
    }
  ];

  recentBusinesses: RecentBusiness[] = [
    {
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      name: 'BayBee Dubai'
    },
    {
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwY2FyJTIwZGVhbGVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      name: 'Cars Dubai'
    },
    {
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwYWdlbmN5fGVufDB8fDB8fHww&w=1000&q=80',
      name: 'Arabian Wings'
    },
    {
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvcmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      name: 'Prime Store LLC'
    }
  ];

  categorySections: CategorySection[] = [
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      name: 'Restaurants'
    },
    {
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHRsaWZlfGVufDB8fDB8fHww&w=1000&q=80',
      name: 'Nightlife'
    },
    {
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      name: 'Beauty & Spa'
    },
    {
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmclMjBtYWxsfGVufDB8fDB8fHww&w=1000&q=80',
      name: 'Shopping'
    },
    {
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwY2FyJTIwZGVhbGVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      name: 'Automotive'
    },
    {
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      name: 'Real Estate'
    },
    {
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwYWdlbmN5fGVufDB8fDB8fHww&w=1000&q=80',
      name: 'Travel'
    },
    {
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      name: 'Healthcare'
    }
  ];

  categories: Category[] = [
    { icon: 'fas fa-compass', name: 'Explore' },
    { icon: 'fas fa-building', name: 'Businesses' },
    { icon: 'fas fa-plane', name: 'Tour & Travel' },
    { icon: 'fas fa-moon', name: 'Nightlife' },
    { icon: 'fas fa-spa', name: 'Beauty & Spa' },
    { icon: 'fas fa-car', name: 'Automobile' },
    { icon: 'fas fa-utensils', name: 'Restaurants' },
    { icon: 'fas fa-shopping-bag', name: 'Shopping' },
    { icon: 'fas fa-home', name: 'Home Services' },
    { icon: 'fas fa-building', name: 'Real Estate' },
    { icon: 'fas fa-film', name: 'Entertainment' },
    { icon: 'fas fa-ellipsis-h', name: 'More' }
  ];

  dubaiLocations: DubaiLocation[] = [
    { value: 'all', label: 'Wheel' },
    { value: 'dubai-marina', label: 'CD 70 Tanks' },
    { value: 'downtown', label: 'CG 125 Tanks' },
    { value: 'jbr', label: 'LED & Lighting' },
    { value: 'business-bay', label: 'Helmet & Gadgets' },
    { value: 'dubai-mall', label: 'Silencer' },
  ];

  originalCards = [
    {
      title: 'Dubai Restaurants',
      description: 'Discover the finest dining experiences',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
    },
    {
      title: 'Dubai Shopping',
      description: 'World-class shopping destinations',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmclMjBtYWxsfGVufDB8fDB8fHww&w=1000&q=80'
    },
    {
      title: 'Dubai Travel',
      description: 'Explore amazing tourist attractions',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
    },
    {
      title: 'Dubai Investment',
      description: 'Prime investment opportunities',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
    }
  ];

  featureSection: FeatureSection = {
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8fDB8fHww&w=1000&q=80',
    title: 'Expand Your Reach and Boost Your Online Presence',
    description: 'Join our platform to connect with customers and grow your business in Dubai',
    features: [
      'Increase your visibility in the local market',
      'Connect with potential customers',
      'Showcase your products and services',
      'Get real-time customer feedback',
      'Access detailed analytics and insights'
    ]
  };

  ngOnInit() {
    // Create infinite scroll effect by duplicating cards
    this.dubaiCards = [...this.originalCards, ...this.originalCards, ...this.originalCards];
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    const slider = document.querySelector('.cards-slider') as HTMLElement;
    if (slider) {
      this.isDragging = true;
      this.startPos = event.clientX;
      this.prevTranslate = slider.scrollLeft;
      slider.style.cursor = 'grabbing';
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    const slider = document.querySelector('.cards-slider') as HTMLElement;
    if (slider) {
      const currentPosition = event.clientX;
      const diff = currentPosition - this.startPos;
      slider.scrollLeft = this.prevTranslate - diff;
    }
  }

  @HostListener('mouseup')
  @HostListener('mouseleave')
  onMouseUp() {
    const slider = document.querySelector('.cards-slider') as HTMLElement;
    if (slider) {
      this.isDragging = false;
      slider.style.cursor = 'grab';
    }
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    const slider = event.target as HTMLElement;
    const scrollLeft = slider.scrollLeft;
    const scrollWidth = slider.scrollWidth;
    const clientWidth = slider.clientWidth;

    // If we're near the end, jump back to the middle
    if (scrollLeft + clientWidth >= scrollWidth - 100) {
      slider.scrollLeft = scrollWidth / 3;
    }
    // If we're near the start, jump to the middle
    else if (scrollLeft <= 100) {
      slider.scrollLeft = scrollWidth / 3;
    }
  }
}
