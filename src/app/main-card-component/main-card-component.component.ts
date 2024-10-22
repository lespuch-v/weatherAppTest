import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf } from '@angular/common';

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
  imports: [
    NgForOf
  ],
  templateUrl: './main-card-component.component.html',
  styleUrl: './main-card-component.component.css'
})
export class MainCardComponentComponent {

  @Input() config: MainConfigCard | null = null;
  @Input() index: number = -1
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.index);
  }

}
