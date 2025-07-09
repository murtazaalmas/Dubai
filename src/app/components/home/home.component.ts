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

  categorySections: CategorySection[] = [
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      name: 'Fuel Tanks'
    },
    {
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHRsaWZlfGVufDB8fDB8fHww&w=1000&q=80',
      name: 'Silencer'
    },
    {
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      name: 'Lights'
    },
    {
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmclMjBtYWxsfGVufDB8fDB8fHww&w=1000&q=80',
      name: 'Helmets'
    },
    {
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwY2FyJTIwZGVhbGVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      name: 'Speedometers'
    },
    {
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      name: 'AlloyRims'
    },
    {
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwYWdlbmN5fGVufDB8fDB8fHww&w=1000&q=80',
      name: 'Decor Items'
    },
    {
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      name: 'Parts'
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



  categoryLists: CategoryList[] = [
    {
      heading: 'Fuel Tanks',
      items: [
        { name: 'CD 70 Fancy Fuel Tanks', link: '#' },
        { name: 'CD 70 Genuine Fuel Tanks', link: '#' }
      ]
    },
    {
      heading: 'AlloyRims',
      items: [
        { name: 'Alloy Rims-CD70', link: '#' },
        { name: 'AlloyRims-CG125', link: '#' }
      ]
    },
    {
      heading: 'Lights',
      items: [
        { name: 'Back Lights', link: '#' },
        { name: 'Head Lights', link: '#' }
      ]
    }
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
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Silencers',
      description: 'High-quality silencers for a smooth and quiet ride',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Alloy Rims',
      description: 'Stylish and durable alloy rims for enhanced performance',
      image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Helmets & Accessories',
      description: 'Protective helmets and essential bike accessories',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
    }
  ];

  featureSection: FeatureSection = {
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
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
