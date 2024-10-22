import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-weather-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './weather-modal.component.html',
  styleUrl: './weather-modal.component.css'
})
export class WeatherModalComponent {

  @Output() close = new EventEmitter<void>();
  @Output() addCity = new EventEmitter<string>();

  cityForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cityForm = this.fb.group({
      cityName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(37),
        Validators.pattern('^[a-zA-Z\\s-]+$'),
      ]]
    })
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    if (this.cityForm.valid) {
      this.addCity.emit(this.cityForm.value.cityName);
    }
  }

}
