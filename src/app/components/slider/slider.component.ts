import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  // Array of slides
  slides = [
    {
      title: 'Redmi Top Mobiles',
      description: '18 Days Battery, Clear+ Calling Sale is Live',
      image: 'assets/s1.png',
    },
    {
      title: 'Xiaomi 14 civi',
      description: '20 Days Battery, Clear+ Calling Sale is Live',
      image: 'assets/s2.jpg',
    },
    {
      title: 'Redmi Power Bank',
      description: '10000mh power bank with type C- cable support',
      image: 'assets/s3.jpg',
    },
  ];

  // Current slide index
  currentSlide = 0;

  // Function to go to the next slide
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  // Function to go to the previous slide
  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
