import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  public container = document.getElementsByClassName('container');
  public navbar = document.getElementsByClassName('navbar');
  public hamburger = document.getElementsByClassName('burgerIcon');
  public closeIcon = document.getElementsByClassName('closeIcon');
  public nav = document.getElementsByClassName('nav');
  public logo = document.getElementsByClassName('logo');
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];


  showMenu() {
    (this.nav[0] as HTMLElement).style.height = '100%';
    (this.hamburger[0] as HTMLElement).style.display = 'none';
    (this.closeIcon[0] as HTMLElement).style.display = 'inline-block';
    (this.container[0] as HTMLElement).style.display = 'block';
    (this.navbar[0] as HTMLElement).style.display = 'block';
    (this.logo[0] as HTMLElement).style.display = 'none' ;

  }
  closeMenu() {
    if ((this.closeIcon[0] as HTMLElement).style.display === 'inline-block') {
      (this.nav[0] as HTMLElement).style.height = '';
      (this.closeIcon[0] as HTMLElement).style.display = 'none';
      (this.hamburger[0] as HTMLElement).style.display = 'block';
      (this.container[0] as HTMLElement).style.display = 'none';
      (this.navbar[0] as HTMLElement).style.display = 'none';
      (this.logo[0] as HTMLElement).style.display = 'inline-block';

    }
  }
  ngOnInit() {
    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationStart) {
        if (ev.url !== this.lastPoppedUrl) {
          this.yScrollStack.push(window.scrollY);
        }
      } else if (ev instanceof NavigationEnd) {
        if (ev.url === this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else {
          window.scrollTo(0, 0);
        }
      }
    });
  }
}
