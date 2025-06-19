import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface QuickLink {
  name: string;
  url: string;
}

interface Category {
  name: string;
  url: string;
}

interface SocialIcon {
  icon: string;
  url: string;
  name: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  quickLinks: QuickLink[] = [
    { name: 'Home', url: '#' },
    { name: 'About Us', url: '#' },
    { name: 'Services', url: '#' },
    { name: 'Businesses', url: '#' },
    { name: 'Contact', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms & Conditions', url: '#' }
  ];

  categories: Category[] = [
    { name: 'Restaurants', url: '#' },
    { name: 'Shopping', url: '#' },
    { name: 'Entertainment', url: '#' },
    { name: 'Beauty & Spa', url: '#' },
    { name: 'Real Estate', url: '#' },
    { name: 'Travel & Tourism', url: '#' },
    { name: 'Healthcare', url: '#' }
  ];

  socialIcons: SocialIcon[] = [
    { icon: 'fab fa-facebook-f', url: '#', name: 'Facebook' },
    { icon: 'fab fa-twitter', url: '#', name: 'Twitter' },
    { icon: 'fab fa-instagram', url: '#', name: 'Instagram' },
    { icon: 'fab fa-linkedin-in', url: '#', name: 'LinkedIn' }
  ];
}
