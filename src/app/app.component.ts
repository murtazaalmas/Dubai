import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessagePopupComponent } from './components/message-popup/message-popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessagePopupComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'qasim-dubai';
  isLoading = true;

  ngOnInit() {
    // Show loader for 5 seconds
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
