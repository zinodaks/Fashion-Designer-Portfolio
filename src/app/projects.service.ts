import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private levis = [
    { source: '/assets/Images/projects/Levis/Levis Venezia - 01.jpg' },
    { source: '/assets/Images/projects/Levis/Levis Venezia - 03.jpg' },
    { source: '/assets/Images/projects/Levis/Levis Venezia - 02.jpg' },
    { source: '/assets/Images/projects/Levis/Levis Venezia - 04.jpg' },
    { source: '/assets/Images/projects/Levis/Levis Venezia - 05.jpg' },
    { source: '/assets/Images/projects/Levis/Levis Venezia - 06.jpg' },
    { source: '/assets/Images/projects/Levis/Levis Venezia - 07.jpg' },
    { source: '/assets/Images/projects/Levis/Levis Venezia - 08.jpg' },
    { source: '/assets/Images/projects/Levis/Levis Venezia - 09.jpg' },
    { source: '/assets/Images/projects/Levis/Levis Venezia - 10.jpg' },
    { source: '/assets/Images/projects/Levis/Levis Venezia - 11.jpg' },
    { source: '/assets/Images/projects/Levis/Levis Venezia - 12.jpeg' }
  ];
  private bancolotto = [
    { source: '/assets/Images/projects/Bancolotto/01.jpg' },
    { source: '/assets/Images/projects/Bancolotto/02.jpg' },
    { source: '/assets/Images/projects/Bancolotto/03.jpg' },
    { source: '/assets/Images/projects/Bancolotto/04.jpg' },
    { source: '/assets/Images/projects/Bancolotto/05.jpg' },
    { source: '/assets/Images/projects/Bancolotto/06.jpg' },
    { source: '/assets/Images/projects/Bancolotto/07.jpg' },
    { source: '/assets/Images/projects/Bancolotto/08.jpg' },
    { source: '/assets/Images/projects/Bancolotto/09.jpg' }
  ];
  private portfolio = [
    { source: '/assets/Images/projects/Portfolio/2.png' },
    { source: '/assets/Images/projects/Portfolio/3.png' },
    { source: '/assets/Images/projects/Portfolio/4.png' },
    { source: '/assets/Images/projects/Portfolio/5.jpg' },
    { source: '/assets/Images/projects/Portfolio/6.jpg' },
    { source: '/assets/Images/projects/Portfolio/7.png' },
    { source: '/assets/Images/projects/Portfolio/8.jpg' },
    { source: '/assets/Images/projects/Portfolio/9.jpg' },
    { source: '/assets/Images/projects/Portfolio/10.jpg' },
    { source: '/assets/Images/projects/Portfolio/11.png' },
    { source: '/assets/Images/projects/Portfolio/12.jpg' },
    { source: '/assets/Images/projects/Portfolio/13.jpg' },
    { source: '/assets/Images/projects/Portfolio/14.jpg' },
    { source: '/assets/Images/projects/Portfolio/15.jpg' },
    { source: '/assets/Images/projects/Portfolio/16.jpg' },
    { source: '/assets/Images/projects/Portfolio/17.jpg' },
    { source: '/assets/Images/projects/Portfolio/18.jpg' },
    { source: '/assets/Images/projects/Portfolio/19.jpg' },
    { source: '/assets/Images/projects/Portfolio/20.jpg' },
    { source: '/assets/Images/projects/Portfolio/21.jpg' },
    { source: '/assets/Images/projects/Portfolio/22.jpg' },
    { source: '/assets/Images/projects/Portfolio/23.jpg' },
    { source: '/assets/Images/projects/Portfolio/24.jpg' },
    { source: '/assets/Images/projects/Portfolio/25.png' },
    { source: '/assets/Images/projects/Portfolio/26.jpg' },
    { source: '/assets/Images/projects/Portfolio/27.jpg' },
    { source: '/assets/Images/projects/Portfolio/28.jpg' },
    { source: '/assets/Images/projects/Portfolio/29.jpg' },
    { source: '/assets/Images/projects/Portfolio/30.png' },
    { source: '/assets/Images/projects/Portfolio/31.jpg' },
    { source: '/assets/Images/projects/Portfolio/32.jpg' },
    { source: '/assets/Images/projects/Portfolio/33.jpg' },
    { source: '/assets/Images/projects/Portfolio/34.jpg' },
    { source: '/assets/Images/projects/Portfolio/35.png' },
    { source: '/assets/Images/projects/Portfolio/36.jpg' },
    { source: '/assets/Images/projects/Portfolio/37.jpg' },
    { source: '/assets/Images/projects/Portfolio/38.jpg' },
    { source: '/assets/Images/projects/Portfolio/39.png' },
    { source: '/assets/Images/projects/Portfolio/40.png' }
  ];

  constructor() { }

  getLevis() {
    return this.levis;
  }
  getBancolotto() {
    return this.bancolotto;
  }
  getPortfolio() {
    return this.portfolio;
  }
}
