import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'add-weather-card',
  standalone: true,
  imports: [],
  templateUrl: './add-weather-card.component.html',
  styleUrl: './add-weather-card.component.css'
})
export class AddWeatherCardComponent {
  @Output() add = new EventEmitter<unknown>();

  onAdd() {

  }
}
