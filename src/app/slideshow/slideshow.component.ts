import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  current = 0;
  slides  = document.getElementsByClassName('slide');

  showImage(current: number) {
    for (const slide of (Array.from(this.slides))) {
      (slide as HTMLElement).style.display = 'none';
    }
    (this.slides[current] as HTMLElement).style.display = 'block';
  }

  nextImage() {
    if (this.current === this.slides.length - 1) {
      this.current = 0;
    } else { this.current++; }
    this.showImage(this.current);
  }

  previousImage() {
    if (this.current === 0) {
      this.current = this.slides.length - 1;
    } else { this.current--; }
    this.showImage(this.current);
  }

  ngOnInit() {
    this.showImage(this.current);
  }
}
