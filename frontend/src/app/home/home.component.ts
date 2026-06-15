import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  images: string[] = [
    '/2026/assets/images/hotel/img_1.jpg',
    '/2026/assets/images/hotel/img_2.jpg',
    '/2026/assets/images/hotel/img_3.jpg',
    '/2026/assets/images/hotel/img_4.jpg',
    '/2026/assets/images/hotel/img_5.JPG',
    '/2026/assets/images/hotel/img_6.jpg',
    '/2026/assets/images/hotel/img_7.JPG',
    '/2026/assets/images/hotel/img_8.jpg',
    '/2026/assets/images/hotel/img_9.jpg',
    '/2026/assets/images/hotel/img_10.jpg',
    '/2026/assets/images/hotel/img_11.jpg',
    '/2026/assets/images/hotel/img_12.jpg'
  ];

  current = 0;
  intervalId: any = null;
  autoplayDelay = 3000; // ms

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.stopAutoplay();
    this.intervalId = setInterval(() => this.next(), this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  prev() {
    this.current = (this.current - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.current = (this.current + 1) % this.images.length;
  }

  goTo(index: number) {
    this.current = index % this.images.length;
  }
}
