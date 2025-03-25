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
      "imagen": "assets/CertificadoLaboral.jpg"
    },
    {
      "fecha": "Octubre 2016",
      "titulo": "SOLICITA O RENUEVA TU RETCC VIRTUAL",
      "imagen": "assets/RETCC.png"
    },
    {
      "fecha": "Octubre 2016",
      "titulo": "HAS SEGUIMIENTO A TU TRAMITE RETCC",
      "imagen": "assets/images.jpg"
    },
    {
      "fecha": "Octubre 2016",
      "titulo": "CONSULTA TRABAJADORES INSCRITOS EN RETCC",
      "imagen": "assets/aaaa.jpg"
    },
    {
      "fecha": "Julio 2009",
      "titulo": "CONSULTA TU RECORD DE CONDUCTOR",
      "imagen": "assets/record.jpg"
    }
  ]
}
