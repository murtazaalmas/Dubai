import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../wheel/popup.component';

interface CategorySection {
  id: number;
  image: string,
  name: string;
  price: string;
  oldPrice: string;
  detail: string;
}


@Component({
  selector: 'app-cd70tanks',
  imports: [CommonModule, NavbarComponent, PopupComponent],
  standalone: true,
  templateUrl: './cd70tanks.component.html',
  styleUrl: './cd70tanks.component.scss'
})
export class CD70TanksComponent implements OnInit {
  categorySections: CategorySection[] = [
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
    {
      id: 2,
      image: '/assets/images/tanks/tank011.jpeg',
      name: '46 Honda Purple/Grey CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank012.jpeg',
      name: 'Alter Chilli Red CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank013.jpeg',
      name: 'Alter Honda logo Design CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank014.jpeg',
      name: 'Black Special Edition CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank015.jpeg',
      name: 'Chili Red Irani design Alter CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank016.jpeg',
      name: 'Dunhill Purple/Smoke CD79',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank017.jpeg',
      name: 'Flame Red CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank018.jpeg',
      name: 'Golden Flame Design | CD70 | High Quality',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank019.jpeg',
      name: 'Green Flame Design | CD70 | High Quality Outfit',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank020.jpeg',
      name: 'Harley Orange/white Alter CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank021.jpeg',
      name: 'Honda Logo White/Red cd70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank022.jpeg',
      name: 'Honda White/Red logo Design CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank023.jpeg',
      name: 'Irani black/blue CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank024.jpeg',
      name: 'Irani Blk/Blue lines Alter CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    }, {
      id: 2,
      image: '/assets/images/tanks/tank025.jpeg',
      name: 'Irani Blk/Red Design CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank026.jpeg',
      name: 'Irani Silver/Blk Design Alter CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    }, {
      id: 2,
      image: '/assets/images/tanks/tank027.jpeg',
      name: 'Irani Silver/Mix Design CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank028.jpeg',
      name: 'Markhor Black/White | CD70 | A+ Quality With Flexible Sidecovers',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    }, {
      id: 2,
      image: '/assets/images/tanks/tank029.jpeg',
      name: 'Markhor Blk/Blue CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank030.jpeg',
      name: 'Markhor Blk/Red CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    }, {
      id: 2,
      image: '/assets/images/tanks/tank031.jpeg',
      name: 'Markhor Blue & White | CD70 | A+ Quality With Flexible Sidecovers',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank032.jpeg',
      name: 'Markhor Red/white CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    }, {
      id: 2,
      image: '/assets/images/tanks/tank033.jpeg',
      name: 'Markhor Silver/Blk CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank034.jpeg',
      name: 'Markhor White/Blue | CD70 | A+ Quality With Flexible Sidecovers',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    }, {
      id: 2,
      image: '/assets/images/tanks/tank035.jpeg',
      name: 'Nardo Grey design CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank036.jpeg',
      name: 'Nardo Grey Irani Design CD70',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    }, {
      id: 2,
      image: '/assets/images/tanks/tank037.jpeg',
      name: 'Power Plus Black Grey | CD70 | Premium Quality With Flexible Sidecovers',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank038.jpeg',
      name: 'Power Plus Red | CD70 | Premium Quality With Flexible Sidecovers',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },
    {
      id: 2,
      image: '/assets/images/tanks/tank038.jpeg',
      name: 'RED FLAME | CD70 | APLUS QUALITY | FLEXIBLE SIDECOVER',
      price: 'Rs.32,000.00',
      oldPrice: 'Rs.34,000.00',
      detail: 'XYZ'
    },

  ];

  selectedView = 1; // 1 to 5 columns
  selectedTab = 1;

  showPopup: boolean = false;
  popupCategory: CategorySection | null = null;
  cartItems: { item: CategorySection, quantity: number }[] = [];
  showToast = false;
  toastMessage = '';

  ngOnInit() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
  }

  saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

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

  onAddCartItem(event: { item: CategorySection, quantity: number }) {
    const existing = this.cartItems.find(ci => ci.item.id === event.item.id && ci.item.name === event.item.name);
    if (existing) {
      existing.quantity += event.quantity;
    } else {
      this.cartItems.push({ item: event.item, quantity: event.quantity });
    }
    this.saveCart();
    this.showToastMessage(`${event.item.name} added to cart!`);
    this.closePopup(); // Optionally close popup after adding
  }

  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 2000);
  }

  incrementCartQty(index: number) {
    this.cartItems[index].quantity++;
    this.saveCart();
  }

  decrementCartQty(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.saveCart();
    }
  }

  onCartQtyInput(index: number, value: string) {
    const qty = Math.max(1, parseInt(value, 10) || 1);
    this.cartItems[index].quantity = qty;
    this.saveCart();
  }

  removeCartItem(index: number) {
    this.cartItems.splice(index, 1);
    this.saveCart();
  }
}
