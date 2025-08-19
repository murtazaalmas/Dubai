import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedService } from './shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Daas';
  isLoading = true;
  toastMessage: string | null = null;
  private toastSubscription?: Subscription;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    // Show loader for 5 seconds
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

    this.toastSubscription = this.sharedService.toastMessage$.subscribe(message => {
      this.toastMessage = message;
    });
  }

  ngOnDestroy() {
    this.toastSubscription?.unsubscribe();
  }
}
