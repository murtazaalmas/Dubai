import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Daas';
  isLoading = true;

  ngOnInit() {
    // Show loader for 5 seconds
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
