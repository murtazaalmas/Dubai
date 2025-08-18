import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { SharedService, CategorySection } from '../../shared.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, CommonModule, PopupComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  products: CategorySection[] = [];
  productCurrentIndex = 0;
  totalProductSlides = 0;

  slides = [
    {
      heading: 'Custom <br /> Team Wear',
      subtext: 'The Best in Sports Equipment',
      buttons: ['Rugby Kit', 'Fitness Wear', 'Tennis Kit'],
      image1: 'assets/images/images1.jpeg',
      image2: 'assets/images/images2.jpeg'
    },
    {
      heading: 'Peak Performance <br /> Gear',
      subtext: 'Engineered for the Modern Athlete',
      buttons: ['Running Shoes'],
      image1: 'assets/images/images3.jpeg',
      image2: 'assets/images/images4.jpeg'
    },
    {
      heading: 'Find Your <br /> Strength',
      subtext: 'Comfort and Style for Every Workout',
      buttons: ['Yoga Mats', 'Dumbbells'],
      image1: 'assets/images/images5.jpeg',
      image2: 'assets/images/images6.jpeg'
    }
  ];

  currentIndex = 0;
  private slideInterval: any;

  // Popup logic
  showPopup = false;
  selectedProduct: CategorySection | null = null;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.startSlider();
    this.products = this.sharedService.getWheelCategorySections();
    this.totalProductSlides = this.products.length > 4 ? this.products.length - 4 + 1 : 1;
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  resetSliderInterval() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    this.startSlider();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.slides.length - 1;
    this.resetSliderInterval();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.resetSliderInterval();
  }

  startSlider() {
    this.slideInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 3000); // Change slide every 3 seconds
  }

  // Product slider logic
  nextProduct(): void {
    this.productCurrentIndex = (this.productCurrentIndex + 1) % this.totalProductSlides;
  }

  prevProduct(): void {
    this.productCurrentIndex = (this.productCurrentIndex - 1 + this.totalProductSlides) % this.totalProductSlides;
  }

  goToProductSlide(index: number): void {
    this.productCurrentIndex = index;
  }

  openPopup(product: CategorySection): void {
    this.selectedProduct = product;
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
    this.selectedProduct = null;
  }

  addToCart(event: { item: CategorySection, quantity: number }): void {
    this.sharedService.addToCart(event.item, event.quantity);
    this.closePopup();
  }


}
