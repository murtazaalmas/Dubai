import { Component, HostListener, OnDestroy, OnInit, AfterViewInit, ElementRef } from '@angular/core';
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
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

  products: CategorySection[] = [];
  productCurrentIndex = 0;
  totalProductSlides = 0;

  newArrivals: CategorySection[] = [];
  newArrivalsCurrentIndex = 0;
  totalNewArrivalsSlides = 0;
  slidesToShow = 4;
  slideWidth = 25;

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

    constructor(private sharedService: SharedService, private el: ElementRef) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSliderConfig();
  }

  ngOnInit(): void {
    this.startSlider();
    this.products = this.sharedService.getWheelCategorySections();
    this.newArrivals = this.sharedService.getNewArrivals();
    this.updateSliderConfig();
  }

  updateSliderConfig() {
    const width = window.innerWidth;
    if (width < 600) {
      this.slidesToShow = 1;
    } else if (width < 900) {
      this.slidesToShow = 2;
    } else {
      this.slidesToShow = 4;
    }
    this.slideWidth = 100 / this.slidesToShow;
    this.totalProductSlides = this.products.length > this.slidesToShow 
      ? this.products.length - this.slidesToShow + 1 
      : 1;

    if (this.productCurrentIndex >= this.totalProductSlides) {
      this.productCurrentIndex = 0;
    }

    // New Arrivals slider
    this.totalNewArrivalsSlides = this.newArrivals.length > this.slidesToShow
        ? this.newArrivals.length - this.slidesToShow + 1
        : 1;
    
    if (this.newArrivalsCurrentIndex >= this.totalNewArrivalsSlides) {
        this.newArrivalsCurrentIndex = 0;
    }
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  ngAfterViewInit() {
    const animatedSection = this.el.nativeElement.querySelector('.animated-section');
    if (animatedSection) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add 'in-view' to both animated content divs
            const elements = entry.target.querySelectorAll('.animated-content');
            elements.forEach(el => {
              el.classList.add('in-view');
            });
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

      observer.observe(animatedSection);
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

  get productSliderTransform() {
    return `translateX(-${this.productCurrentIndex * this.slideWidth}%)`;
  }

  // New Arrivals slider logic
  nextNewArrival(): void {
    this.newArrivalsCurrentIndex = (this.newArrivalsCurrentIndex + 1) % this.totalNewArrivalsSlides;
  }

  prevNewArrival(): void {
    this.newArrivalsCurrentIndex = (this.newArrivalsCurrentIndex - 1 + this.totalNewArrivalsSlides) % this.totalNewArrivalsSlides;
  }

  goToNewArrivalSlide(index: number): void {
    this.newArrivalsCurrentIndex = index;
  }

  get newArrivalsSliderTransform() {
    return `translateX(-${this.newArrivalsCurrentIndex * this.slideWidth}%)`;
  }

}
