import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CardBlogComponent } from './components/card-blog/card-blog.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, CardBlogComponent, NgFor],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogs = [
    {
      "fecha": "Diciembre 2023",
      "titulo": "INSCRIBETE U OBTEN TU CERTIFICADO UNICO LABORAL",
      "imagen": "assets/CertificadoLaboral.jpg",
      "url": "https://www.gob.pe/47089-obtener-tu-certificado-unico-laboral-cul"
    },
    {
      "fecha": "Octubre 2016",
      "titulo": "SOLICITA O RENUEVA TU RETCC VIRTUAL",
      "imagen": "assets/RETCC.png",
      "url": "https://portal.trabajo.gob.pe/retcc-virtual/"

    },
    {
      "fecha": "Octubre 2016",
      "titulo": "HAS SEGUIMIENTO A TU TRAMITE RETCC",
      "imagen": "assets/images.jpg",
      "url": "https://portal.trabajo.gob.pe/si.retccseg/app/#/"
    },
    {
      "fecha": "Octubre 2016",
      "titulo": "CONSULTA TRABAJADORES INSCRITOS EN RETCC",
      "imagen": "assets/aaaa.jpg",
      "url": "https://portal.trabajo.gob.pe/si.retccExterno/#/"
    },
    {
      "fecha": "Julio 2009",
      "titulo": "CONSULTA TU RECORD DE CONDUCTOR",
      "imagen": "assets/record.jpg",
      "url": "https://recordconductor.mtc.gob.pe/"
    },
    {
      "fecha": "",
      "titulo": "LICENCIA POR FALLECIMIENTO DE FAMILIARES EN EL SECTOR PRIVADO",
      "imagen": "assets/licencia.png",
      "url": "assets/LICENCIA POR FALLECIMIENTO DE FAMILIARES EN EL SECTOR PRIVADO.pdf"
    },
    {
      "fecha": "",
      "titulo": "DESCANSO SEMANAL OBLIGATORIO EN EL SECTOR PRIVADO",
      "imagen": "assets/DESCANSO.png",
      "url": "assets/DESCANSO SEMANAL OBLIGATORIO EN EL SECTOR PRIVADO.pdf"
    },
    {
      "fecha": "",
      "titulo": "DERECHOS LABORALES DE LAS TRABAJADORAS",
      "imagen": "assets/derechos.png",
      "url": "assets/DERECHOS LABORALES DE LAS TRABAJADORAS EN ETAPA DE GESTACIÓN Y LACTANCIA EN EL SECTOR PRIVADO.pdf"
    },
    {
      "fecha": "",
      "titulo": "BOLETAS DE PAGO",
      "imagen": "assets/boletas.png",
      "url": "assets/BOLETAS DE PAGO.pdf"
    },
  ]
}
