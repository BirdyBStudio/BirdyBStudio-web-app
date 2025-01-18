import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  imports:[CarouselComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  slides = [
    { image: 'assets/slide1.jpg', title: 'Past Work 1' },
    { image: 'assets/slide2.jpg', title: 'Current Project' },
    { image: 'assets/slide3.jpg', title: 'Future Idea' },
  ];

  desktopSlides = [
    { src: 'slide1.jpg', title: 'Past Work 1', subtitle: 'nothing' },
    { src: 'slide2.png', title: 'Current Project', subtitle: 'nothing' },
    { src: 'slide3.jpg', title: 'Future Idea', subtitle: 'nothing' },
    { src: 'slide4.jpg', title: '', subtitle: ''},
    { src: 'slide5_.jpg', title: '', subtitle: ''},
    { src: 'slide6.jpeg', title: '', subtitle: ''}
  ];

  mobileSlides = [
    { src: 'mobile-slide1.webp', title: '', subtitle: ''},
    { src: 'mobile-slide2.webp', title: '', subtitle: ''},
    { src: 'mobile-slide4.webp', title: '', subtitle: ''}
  ]

  private breakpointObserver = inject(BreakpointObserver);
  desktopLayout = false;

  ngOnInit(){
    this.breakpointObserver.observe('(max-width: 599px)').subscribe(result => {
        this.desktopLayout = !result.matches;
    });
  }

  customOptions = {
    loop: true,
    autoplay: true,
    items: 1,
    nav: true,
  };
}
