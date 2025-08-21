import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Suit } from '../../models/color-game.models';

@Component({
  selector: 'app-trump-suit-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trump-suit-display.component.html',
  styleUrls: ['./trump-suit-display.component.scss']
})
export class TrumpSuitDisplayComponent {
  @Input() suit: Suit | null = null;
  Suit = Suit; // To use enum in template
}
