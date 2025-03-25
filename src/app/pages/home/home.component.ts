import { Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NavbarHomeComponent } from '../../shared/components/navbar-home/navbar-home.component';
import { NgIf } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, NavbarHomeComponent, NgIf, AccordionModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showPreview: boolean = true;
  isPlaying: boolean = false;

  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>;

  playVideo() {
    this.showPreview = false;
    this.isPlaying = true;
    this.videoPlayer.nativeElement.play();
  }

  togglePlayPause() {
    if (this.videoPlayer.nativeElement.paused) {
      this.videoPlayer.nativeElement.play();
      this.isPlaying = true;
    } else {
      this.videoPlayer.nativeElement.pause();
      this.isPlaying = false;
    }
  }
}
