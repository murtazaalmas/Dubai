import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';

interface CategorySection {
  id: number;
  image: string;
  name: string;
  price: string;
  oldPrice: string;
  detail: string;
}

@Component({
  selector: 'app-wheel',
  imports: [CommonModule, NavbarComponent, PopupComponent],
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.scss'
})
export class WheelComponent {
  categorySections: CategorySection[] = [
    {
      id: 1,
      image: '/assets/images/wheel/wheel01.webp',
      name: 'Alloyrims Silver CD70 | Star Shape | Premium Quality',
      price: 'Rs.21,999.00',
      oldPrice: 'Rs.22,900.00',
      detail: 'Upgrade your bike with our Alloyrims Silver CD70! Featuring a star shape design for an aesthetic look and better grip, these premium quality rims will enhance your riding experience. Experience...'
    },
    {
      id: 1,
      image: '/assets/images/wheel/wheel02.webp',
      name: 'Silver Curve Alloy Rims for CD 70 – Durable & Sleek Design',
      price: 'Rs.23,000.00',
      oldPrice: 'Rs.25,000.00',
      detail: 'Upgrade your Honda CD 70 with our stylish and strong Silver Curve Alloy Rims. Made from high-quality aluminum, these rims are built to last, are lightweight, and add a modern...'
    },
    {
      id: 1,
      image: '/assets/images/wheel/wheel03.webp',
      name: 'Crown Red Alloy Rims for Honda CD70 - Premium Quality',
      price: 'Rs.23,000.00',
      oldPrice: 'Rs.25,000.00',
      detail: 'Upgrade your Honda CD70 with our premium Crown Red Alloy Rims—designed for riders who demand style and performance. Featuring a bold red finish and a sleek design, these lightweight rims...'
    },
    {
      id: 1,
      image: '/assets/images/wheel/wheel04.webp',
      name: 'Crown Golden Alloy Rims for Honda CD70 - Elegant & Durable',
      price: 'Rs.23,000.00',
      oldPrice: 'Rs.25,000.00',
      detail: "Upgrade your Honda CD70 with our premium Crown Golden Alloy Rims, designed to combine style and performance. Featuring a luxurious golden finish, these lightweight rims enhance your bike's aesthetics, improve..."
    },
    {
      id: 1,
      image: '/assets/images/wheel/wheel05.webp',
      name: 'Alloyrims CD70 | YBR Shape Blue Outline | Premium Quality',
      price: 'Rs.21,999.00',
      oldPrice: '',
      detail: 'Enhance your ride with the Alloyrims CD70 featuring a sleek YBR shape and striking blue outline. Crafted with premium quality materials, these rims offer durability and style, ensuring your bike...'
    },
    {
      id: 1,
      image: '/assets/images/wheel/wheel06.webp',
      name: 'Premium Red Curve Alloy Rims for CD 70 – Stylish & Durable Design',
      price: 'Rs.23,000.00',
      oldPrice: 'Rs.25,000.00',
      detail: 'Upgrade your Honda CD 70 with our premium Red Curve Alloy Rims—crafted for riders who value both style and performance. With a sleek red finish and modern curved design, these...'
    },
    {
      id: 1,
      image: '/assets/images/wheel/wheel07.webp',
      name: 'Curve Golden Alloy Rims for Honda CD70 - Stylish & Durable',
      price: 'Rs.23,000.00',
      oldPrice: 'Rs.25,000.00',
      detail: 'Transform your Honda CD70 with our premium Curve Golden Alloy Rims, designed for bikers in Pakistan who value elegance and performance. These lightweight alloy rims feature a striking golden finish...'
    },
    // cg-125-alloy-rim
    {
      id: 2,
      image: '/assets/images/wheel/wheel08.webp',
      name: 'Alloy Rims in YBR Shape With plates for Honda CG125 - Stylish, Durable, and Affordable | Top Choice in Pakistan',
      price: 'Rs.34,999.00',
      oldPrice: 'Rs.38,000.00',
      detail: 'Transform your Honda CG125 with YBR Shape Alloy Rims, designed for bikers in Pakistan seeking cutting-edge style and reliable performance. With a modern YBR-inspired design, these premium alloy rims offer...'
    },
    {
      id: 2,
      image: '/assets/images/wheel/wheel09.webp',
      name: 'Silver Alloy Rims for Honda CG125 - Durable & Stylish',
      price: 'Rs.31,999.00',
      oldPrice: 'Rs.35,000.00',
      detail: "Elevate your Honda CG125 with our high-quality Silver Alloy Rims, crafted for riders in Pakistan who demand durability and style. These premium alloy rims feature a sleek silver finish that..."
    },
    {
      id: 2,
      image: '/assets/images/wheel/wheel10.webp',
      name: 'Golden Alloy Rims CG125',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: "Elevate your CG125 with our premium Golden Alloy Rims. These stunning lightweight wheels combine luxury aesthetics with superior performance, reducing unsprung weight for improved handling and acceleration. We're here to..."
    },
    {
      id: 2,
      image: '/assets/images/wheel/wheel11.webp',
      name: 'Star Black Alloy Rims for Honda CG125 - Premium Quality & Bold Design',
      price: 'Rs.34,999.00',
      oldPrice: 'Rs.38,000.00',
      detail: 'Upgrade your Honda CG125 with Star Black Alloy Rims, the perfect blend of durability and bold style for riders in Pakistan. Featuring a stunning star-inspired design and a sleek black...'
    },
    {
      id: 2,
      image: '/assets/images/wheel/wheel12.webp',
      name: 'Black Alloy Rims CG125',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'Enhance your CG125 motorcycle with our sleek Black Alloy Rims. Designed for durability and style, these lightweight rims improve handling while giving your bike a modern, custom look. Perfect for...'
    },
    {
      id: 2,
      image: '/assets/images/wheel/wheel13.webp',
      name: 'Golden Alloy Rims CG125',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: "Elevate your CG125 motorcycle with our premium Golden Alloy Rims. These lightweight yet durable rims not only enhance your bike's performance with improved handling and reduced unsprung weight, but also..."
    },
    {
      id: 2,
      image: '/assets/images/wheel/wheel14.webp',
      name: 'T-Style Red Alloy Rims CG125',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'Transform your CG125 with our striking T-Style Red Alloy Rims. These premium rims combine eye-catching color with the distinctive T-style design, offering improved performance through reduced weight and enhanced stability....'
    },
    {
      id: 2,
      image: '/assets/images/wheel/wheel15.webp',
      name: 'T-Style Silver Alloy Rims CG125',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'Upgrade your CG125 motorcycle with these premium T-Style Silver Alloy Rims. Specifically designed for CG125 models, these stylish rims feature a distinctive T-Style pattern with an elegant silver finish that...'
    },
    {
      id: 2,
      image: '/assets/images/wheel/wheel16.webp',
      name: 'Blue Alloy Rims CG125',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: "Revitalize your CG125 with these distinctive Blue Alloy Rims. Specifically engineered for CG125 motorcycles, these vibrant blue rims instantly refresh your bike's appearance with their bold, contemporary color. The high-quality..."
    },
    {
      id: 2,
      image: '/assets/images/wheel/wheel17.webp',
      name: 'Golden Alloy Rims CG125',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'Elevate your CG125 motorcycle with these luxurious Golden Alloy Rims. Custom-designed for CG125 models, these premium rims showcase a stunning gold finish that transforms your bike into a true head-turner....'
    },
    {
      id: 2,
      image: '/assets/images/wheel/wheel18.webp',
      name: 'Black Alloy Rims CG125',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: "Give your CG125 a sleek, modern upgrade with these Black Alloy Rims. Specifically designed for CG125 motorcycles, these premium rims feature a sophisticated matte black finish that adds an aggressive,..."
    },
    {
      id: 2,
      image: '/assets/images/wheel/wheel19.webp',
      name: 'Red Alloy Rims CG125',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: "Transform your CG125 with these striking Red Alloy Rims. Precision-engineered for perfect fitment on CG125 motorcycles, these vibrant red rims instantly elevate your bike's appearance.The lightweight alloy construction reduces..."
    },
    {
      id: 2,
      image: '/assets/images/wheel/wheel20.webp',
      name: 'Silver Alloy Rims CG125',
      price: 'Rs.32,999.00',
      oldPrice: 'Rs.33,999.00',
      detail: 'Enhance your CG125 motorcycle with these sleek Silver Alloy Rims. Specifically engineered for CG125 models, these lightweight rims improve handling and performance while adding a sophisticated silver finish to your...'
    },
    {
      id: 2,
      image: '/assets/images/wheel/wheel21.webp',
      name: 'T-Style Golden Metal Alloy Rims CG125',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'Enhance your CG125 motorcycle with our premium T-Style Golden Metal Alloy Rims. These lightweight yet durable rims provide improved handling and a striking golden finish that will make your bike...'
    },


  ];

  selectedView = 1; // 1 to 5 columns
  selectedTab = 1;

  showPopup: boolean = false;
  popupCategory: CategorySection | null = null;

  setTab(tab: number) {
    this.selectedTab = tab;
  }

  setView(cols: number) {
    this.selectedView = cols;
  }

  get filteredCategories() {
    return this.categorySections.filter(c => c.id === this.selectedTab);
  }

  openPopup(category: CategorySection) {
    this.popupCategory = category;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.popupCategory = null;
  }
}
