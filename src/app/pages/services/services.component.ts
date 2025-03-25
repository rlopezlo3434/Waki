import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CarNumerosComponent } from './components/car-numeros/car-numeros.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CarNumerosComponent, NgFor, FormsModule ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  stats = [
    { value: 20, label: 'Años de experiencia', currentValue: 0, icon:"+" },
    { value: 50, label: 'Proyectos realizados', currentValue: 0, icon:"+" },
    { value: 300, label: 'Clientes satisfechos', currentValue: 0 },
    { value: 15, label: 'Atención personalizada', currentValue: 0, icon:"K" }
  ];

  formData = {
    nombre: '',
    email: '',
    telefono: '',
    razon: '',
    ruc: '',
    mensaje: ''
  };

  ngOnInit(): void {
    this.stats.forEach(stat => {
      this.animateCount(stat);
    });
  }

  enviarWhatsApp() {
    const { nombre, email, telefono, razon, ruc, mensaje } = this.formData;

    const texto = `Hola, quiero más información:%0A
    *Nombre:* ${nombre}%0A
    *Email:* ${email}%0A
    *Teléfono:* ${telefono}%0A
    *Razón Social:* ${razon}%0A
    *RUC:* ${ruc}%0A
    *Mensaje:* ${mensaje}`;

    const url = `https://api.whatsapp.com/send?phone=51997426268&text=${texto}`;

    window.open(url, '_blank');
  }

  animateCount(stat: any) {
    let start = 0;
    const end = stat.value;
    const duration = 2000; // Duración total en ms
    const stepTime = Math.max(duration / end, 10); // Tiempo por paso, mínimo 10ms

    const timer = setInterval(() => {
      start += 1;
      stat.currentValue = start;

      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
}
