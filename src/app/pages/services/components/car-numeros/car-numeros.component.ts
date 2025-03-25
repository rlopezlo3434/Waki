import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-numeros',
  standalone: true,
  imports: [],
  templateUrl: './car-numeros.component.html',
  styleUrl: './car-numeros.component.css'
})
export class CarNumerosComponent {
  @Input() data: any;
}
