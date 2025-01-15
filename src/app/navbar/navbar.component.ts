import { Component, inject, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from "@angular/material/button"
import { BreakpointObserver, LayoutModule } from "@angular/cdk/layout"
import { HomeComponent } from '../home/home.component';
import { trigger, state, style, transition, animate, query, stagger, group } from '@angular/animations';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-navbar',
  animations: [
    trigger('mobileMenu', [
      transition(':enter', [style({opacity: 0}), animate('100ms', style({opacity: '*'}))]),
      transition(':leave', [animate('100ms', style({opacity: 0}))])
    ]),
    trigger('flip', [ 
      state(
        'unflipped',
        style({
          transform: 'rotate(0)'
        }),
      ),
      state(
        'flipped',
        style({
          transform: 'rotate(180deg)'
        })
      ),
      transition('unflipped => flipped', [animate('0.25s')]),
      transition('flipped => unflipped', [animate('0.25s')])
    ]),
    trigger('mobileGames', [
      transition(':enter', [
        group([
          query(':self', 
            [style({height: '0%'}), animate('0.5s cubic-bezier(0.2, 0.0, 0, 1.0)', style({height: '*'}))],
          ),
          query('.mobile-game', 
            [style({ transform: 'translateX(-300px)', opacity: 0 }), stagger('0.05s', animate('0.5s 0.05s cubic-bezier(0.2, 0.0, 0, 1.0)', style({ transform: 'translateX(0px)', opacity: 1 })))],
          {optional: true}
          )
        ])
      ]),
      transition(':leave', [
        group([
          query('.mobile-game',
            [animate('0.2s cubic-bezier(0.3, 0.0, 0.8, 0.15)', style({transform: 'translateX(-300px)', opactiy: 0}))],
            {optional: true}
          ),
          query(':self',
            [animate('0.5s 0.2s cubic-bezier(0.2, 0.0, 0, 1.0)', style({height: '0px'}))]
          )
        ])
      ])
    ])
  ],
  imports: [
    MatToolbar,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonToggleModule,
    LayoutModule,
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  desktopMenu = false;

  mobileMenuOpen = false;
  mobileGamesMenuOpen = false;
  
  ngOnInit(){
    this.breakpointObserver.observe('(max-width: 599px)').subscribe(result => {
        this.desktopMenu = !result.matches;
    });
  }
      
  openMobileNav() {
    this.mobileMenuOpen = true;
  }

  closeMobileNav() {
    this.mobileMenuOpen = false;
  }

  toggleMobileGamesMenu() {
    this.mobileGamesMenuOpen = !this.mobileGamesMenuOpen;
  }
}
