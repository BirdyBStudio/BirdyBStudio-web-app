import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Slide {
  src: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-carousel',
  imports: [ MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  animations: [
    trigger('carouselImage',
      [
        state('-2', style({zIndex: 0, opacity: 1, transform: 'translate(-200%, -50%) scale(0)'})),
        state('-1', style({zIndex: 1, opacity: 1, transform: 'translate(-80%, -50%) scale(0.8)'})),
        state('0', style({zIndex: 2, opacity: 1, transform: 'translate(0%, -50%) scale(0.9)'})),
        state('1', style({zIndex: 1, opacity: 1, transform: 'translate(80%, -50%) scale(0.8)'})),
        state('2', style({zIndex: 0, opacity: 1, transform: 'translate(200%, -50%) scale(0)'})),
        transition('* <=> *', [animate('0.3s 	cubic-bezier(0.2, 0.0, 0, 1.0)')])
      ]
    )
  ]
})
export class CarouselComponent {
  @Input() slides: Slide[] = [];
  
  tmp = [
    { src: 'slide1.jpg', title: 'Past Work 1', subtitle: 'nothing' },
    { src: 'slide2.png', title: 'Current Project', subtitle: 'nothing' },
    { src: 'slide3.jpg', title: 'Future Idea', subtitle: 'nothing' },
    { src: 'slide4.jpg', title: '', subtitle: ''},
    { src: 'slide5_.jpg', title: '', subtitle: ''},
    { src: 'slide6.jpeg', title: '', subtitle: ''}
  ];

  curIndex: number = 0;

  incrementSlide() {
    this.curIndex = (this.curIndex + 1) % this.slides.length;
  }

  decrementSlide() {
    this.curIndex = (this.curIndex - 1) % this.slides.length;
  }

  min(a: number, b: number) {
    return Math.min(a, b)
  }

  max(a: number, b: number) {
    return Math.max(a, b)
  }

  trueModulo(num: number, divisor: number) {
    return ((num % divisor) + divisor) % divisor;
  }

  relativeIndex(index: number) {
    if(this.slides.length <= 3) {
      return Math.max(Math.min(this.trueModulo(index-this.curIndex+1, this.slides.length)-1, 1), -1);
    }
    return Math.max(Math.min(this.trueModulo(index-this.curIndex+2, this.slides.length)-2, 2), -2);
  }
}
