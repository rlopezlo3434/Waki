import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-purpose',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './purpose.component.html',
  styleUrl: './purpose.component.css'
})
export class PurposeComponent {

}
