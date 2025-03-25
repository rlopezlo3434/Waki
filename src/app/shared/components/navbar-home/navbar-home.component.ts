import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-home.component.html',
  styleUrl: './navbar-home.component.css'
})
export class NavbarHomeComponent {
  isModalOpen = false;

  abrirModal() {
    this.isModalOpen = true;
  }

  cerrarModal() {
    this.isModalOpen = false;
  }
}
