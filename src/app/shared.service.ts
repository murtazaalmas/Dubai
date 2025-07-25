import { Injectable } from '@angular/core';

export interface CategorySection {
  id: number;
  image: string;
  name: string;
  price: string;
  oldPrice: string;
  detail: string;
}

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() { }

  getCD70CategorySections(): CategorySection[] {
    return [
      {
        id: 1,
        image: '/assets/images/tanks/tank001.webp',
        name: '2025 Red CD70',
        price: 'Rs.8,500.00',
        oldPrice: 'Rs.7,999.00',
        detail: 'The 2025 Red CD70 is a high-quality motorcycle that boasts a genuine paint and logo, making it a durable and stylish choice. With its advanced 2025 model and vibrant red...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank002.webp',
        name: '2025 Blk CD70',
        price: 'Rs.8,999.00',
        oldPrice: 'Rs.7,500.00',
        detail: 'Upgrade your CD70 bike with the sleek and stylish 2025 black fueltank. With its modern design, your bike will stand out from the rest. Enjoy a smoother and more convenient...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank003.webp',
        name: '2025 Black-Blue Sticker CD70',
        price: 'Rs.8,999.00',
        oldPrice: 'Rs.7,500.00',
        detail: 'The 2024 Blk-Blue Sticker CD70 features a customized 2024 blue sticker on a sleek black fuel tank, adding a touch of beauty to your ride. With a professional and objective...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank004.webp',
        name: '2005 CD70 FUEL TANK - CUSTOMIZED GENUINE',
        price: 'Rs.9,900.00',
        oldPrice: 'Rs.9,200.00',
        detail: "Looking for a reliable replacement fuel tank for your 2005 CD 70? Look no further! Our genuine quality customized fuel tank is the perfect fit for your bike, providing long-lasting..."
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank005.webp',
        name: '2010 CD70 FUEL TANK - CUSTOMIZED GENUINE',
        price: 'Rs.10,000.00',
        oldPrice: '9,200.00',
        detail: "Upgrade your bike's fuel tank with the 2010 CD 70 FUEL TANK. With its genuine quality and customized design, you can enjoy a smoother and more efficient ride. Perfect for..."
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank006.webp',
        name: '2012 Red CD70',
        price: 'Rs.9,900.00',
        oldPrice: 'Rs.9,200.00',
        detail: 'Upgrade to the 2012 Red CD70 for a customised, high quality ride. With a unique fuel tank and superior construction, this bike is a top choice for those seeking durability...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank007.webp',
        name: '2007 Red CD70',
        price: 'Rs.9,999.00',
        oldPrice: 'Rs.9,200.00',
        detail: 'Ride in style with the 2007 Red CD70 outfit for your Honda CD70 bike. This genuine quality outfit boasts a sleek red color and is designed specifically for the 2007...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank008.webp',
        name: '2013 Red CD70',
        price: 'Rs.9,999.00',
        oldPrice: 'Rs.9,200.00',
        detail: 'Upgrade your Honda CD70 with the 2013 Red CD70 fuel tank set. Made with genuine quality materials, this set guarantees reliable performance for your bike. Take your ride to the...'
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank009.webp',
        name: '1997 Red CD70',
        price: 'Rs.9,999.00',
        oldPrice: 'Rs.9,200.00',
        detail: "Upgrade your motorcycle with our 1997 Red CD70! Featuring a high-quality fuel tank set, genuine paint, sticker, and monogram, this model is sure to stand out. Take your ride to..."
      },
      {
        id: 1,
        image: '/assets/images/tanks/tank010.webp',
        name: '2015 red CD70',
        price: 'Rs.9,999.00',
        oldPrice: 'Rs.9,200.00',
        detail: "Introducing the 2015 red CD70 - the perfect blend of style and functionality. This outfit boasts a customised design, genuine fueltank, and high-quality materials, making it a top-of-the-line product. Upgrade..."
      },
      // ... (add the rest of the items as needed)
    ];
  }

  getWheelCategorySections(): CategorySection[] {
    return [
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
        oldPrice: '',
        detail: ''
      },
      // ... (add the rest of the items as needed)
    ];
  }
} 