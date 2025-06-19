import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentDate = new Date();

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdown = target.closest('.nav-item.dropdown');
    
    if (dropdown) {
      const dropdownMenu = dropdown.querySelector('.dropdown-menu') as HTMLElement;
      if (dropdownMenu) {
        const rect = dropdown.getBoundingClientRect();
        const menuWidth = dropdownMenu.offsetWidth;
        const windowWidth = window.innerWidth;
        
        // If dropdown would go off screen to the right
        if (rect.left + menuWidth > windowWidth) {
          dropdownMenu.classList.add('edge-aligned');
        } else {
          dropdownMenu.classList.remove('edge-aligned');
        }
      }
    }
  }
}
