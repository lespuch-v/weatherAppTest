import { Component, Input } from '@angular/core';

export interface MainConfigCard {
  cityName: string;
  temperature: string;
  weatherStatus: string;
  humidity: number;
  windConditions: number;
}

@Component({
  selector: 'main-card-component',
  standalone: true,
  imports: [],
  templateUrl: './main-card-component.component.html',
  styleUrl: './main-card-component.component.css'
})
export class MainCardComponentComponent {

  @Input() config: MainConfigCard | null = null;

}