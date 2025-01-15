import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports:[CarouselModule, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  slides = [
    { image: 'assets/slide1.jpg', title: 'Past Work 1' },
    { image: 'assets/slide2.jpg', title: 'Current Project' },
    { image: 'assets/slide3.jpg', title: 'Future Idea' },
  ];

  customOptions = {
    loop: true,
    autoplay: true,
    items: 1,
    nav: true,
  };
}
