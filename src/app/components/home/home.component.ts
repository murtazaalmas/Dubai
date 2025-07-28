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
  icon?: string;
  name: string;
}

interface CategorySection {
  image: string;
  name: string;
  route?: string; // Added route property
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

function getCategoryIconByName(name: string): string {
  const lower = name.toLowerCase();
  if (lower.includes('fancy') && lower.includes('tank')) return 'fas fa-gas-pump';
  if (lower.includes('genuine') && lower.includes('tank')) return 'fas fa-oil-can';
  if (lower.includes('silencer')) return 'fas fa-volume-up';
  if (lower.includes('rim')) return 'fas fa-circle-notch';
  if (lower.includes('back light')) return 'fas fa-lightbulb';
  if (lower.includes('head light')) return 'fas fa-lightbulb';
  if (lower.includes('helmet')) return 'fas fa-hard-hat';
  if (lower.includes('speedometer')) return 'fas fa-tachometer-alt';
  // fallback
  return 'fas fa-cogs';
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
  currentSlideIndex = 0;
  currentCategoryIndex = 0;

  categorySections: CategorySection[] = [
    {
      image: '/assets/images/tanks/10029.jpeg',
      name: 'Fuel Tanks',
      route: '/cd70tanks'
    },
    {
      image: '/assets/images/wheel/10011.jpg',
      name: 'AlloyRims',
      route: '/wheel'
    },
    {
      image: '/assets/images/silencer/10104.jpeg',
      name: 'Silencer',
      route: '/silencer'
    },
    {
      image: '/assets/images/lights/10065.jpg',
      name: 'Lights',
      route: '/ledlighting'
    },
    {
      image: '/assets/images/helmet/10020.jpeg',
      name: 'Helmets',
      route: '/helmetgadgets'
    },
    {
      image: '/assets/images/lights/10066.jpg',
      name: 'Speedometers',
      route: '/ledlighting'
    },
    
    {
      image: '/assets/images/_Studio/10076.jpg',
      name: 'Decor Items',
      route: '/ledlighting'
    },
    {
      image: '/assets/images/_Studio/10113.png',
      name: 'Parts',
      route: '/ledlighting'
    }
  ];

  categories: Category[] = [
    { name: 'CD 70 Fancy Fuel Tanks' },
    { name: 'CD 70 Genuine Fuel Tanks' },
    { name: 'CG 125 Fancy Fuel Tanks' },
    { name: 'CG 125 Genuine Fuel Tanks' },
    { name: '125 Silencer' },
    { name: 'Alloy Rims-CD70' },
    { name: 'AlloyRims-CG125' },
    { name: 'Decor Items' },
    { name: 'Back Lights' },
    { name: 'Head Lights' },
    { name: 'Helmets' },
    { name: 'Speedometers' },
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
      title: 'Fuel Tanks',
      description: 'Premium and genuine fuel tanks for all bike models',
      image: '/assets/images/tanks/10029.jpeg',

    },
    {
      title: 'Silencers',
      description: 'High-quality silencers for a smooth and quiet ride',
      image: '/assets/images/silencer/10104.jpeg',

    },
    {
      title: 'Alloy Rims',
      description: 'Stylish and durable alloy rims for enhanced performance',
      image: '/assets/images/wheel/10011.jpg',

    },
    {
      title: 'Helmets & Accessories',
      description: 'Protective helmets and essential bike accessories',
      image: '/assets/images/helmet/10020.jpeg',

    }
  ];

  featureSection: FeatureSection = {
    image: '/assets/images/_Studio/10005.jpeg',
    title: 'Upgrade Your Ride with Premium Bike Parts',
    description: 'Find the best quality motor-bike parts, accessories, and upgrades to enhance your bike’s performance, safety, and style. Shop genuine and aftermarket parts for every need.',
    features: [
      'Wide range of fuel tanks, silencers, rims, and more',
      'Genuine and high-quality aftermarket parts',
      'Accessories for comfort and safety',
      'Expert support and guidance',
      'Fast delivery and easy returns'
    ]
  };

  ngOnInit() {
    // Assign icons dynamically to categories
    this.categories = this.categories.map(cat => ({
      ...cat,
      icon: getCategoryIconByName(cat.name)
    }));
    // Create infinite scroll effect by duplicating cards
    this.dubaiCards = [...this.originalCards, ...this.originalCards, ...this.originalCards];
    setTimeout(() => {
      this.attachSliderScrollListener();
      this.attachCategoryScrollListener();
    }, 0);
  }

  attachSliderScrollListener() {
    const slider = document.querySelector('.cards-slider');
    if (!slider) return;
    slider.addEventListener('scroll', () => {
      const cardWidth = (slider as HTMLElement).querySelector('.card')?.clientWidth || 1;
      const scrollLeft = (slider as HTMLElement).scrollLeft;
      const index = Math.round(scrollLeft / (cardWidth + 24)); // 24px gap
      this.currentSlideIndex = index % this.originalCards.length;
    });
  }

  attachCategoryScrollListener() {
    const grid = document.querySelector('.category-section .category-grid');
    if (!grid) return;
    const totalCards = this.categories.length;
    // Duplicate categories for infinite scroll
    const originalCards = Array.from(grid.children).slice(0, totalCards);
    // Only duplicate if not already duplicated
    if (grid.children.length === totalCards) {
      for (let i = 0; i < 2; i++) {
        originalCards.forEach(card => grid.appendChild(card.cloneNode(true)));
      }
      grid.scrollLeft = grid.scrollWidth / 3;
    }
    grid.addEventListener('scroll', () => {
      const cardWidth = (grid as HTMLElement).querySelector('.category-card')?.clientWidth || 1;
      const scrollLeft = (grid as HTMLElement).scrollLeft;
      const totalWidth = cardWidth * totalCards;
      // Infinite scroll logic
      if (scrollLeft <= cardWidth) {
        grid.scrollLeft = scrollLeft + totalWidth;
      } else if (scrollLeft + (grid as HTMLElement).clientWidth >= grid.scrollWidth - cardWidth) {
        grid.scrollLeft = scrollLeft - totalWidth;
      }
      const index = Math.round(scrollLeft / (cardWidth + 32)) % totalCards;
      this.currentCategoryIndex = ((index % totalCards) + totalCards) % totalCards;
    });
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
