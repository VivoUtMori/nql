import { Component, Input } from '@angular/core';
import { CapitolPosition } from '../../../models/capitol-positions';
import { PRESIDENT } from '../../../data/capitol/positions';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-buff-calculator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './buff-calculator.component.html',
  styleUrl: './buff-calculator.component.css'
})
export class BuffCalculatorComponent {
  buffWithoutCapitol = 0;
  buffWithCapitol = 0;
  capitolPosition: CapitolPosition = PRESIDENT;
  timeWithoutCapitolPosition = 0;
  timeWithCapitolPosition = 0;

  calcTimeWithCapitolPosition(): void {
    this.timeWithCapitolPosition = this.timeWithoutCapitolPosition * this.buffWithoutCapitol / this.buffWithCapitol;
  }
}
