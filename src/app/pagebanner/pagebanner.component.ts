import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagebanner',
  templateUrl: './pagebanner.component.html',
  styleUrls: ['./pagebanner.component.css']
})
export class PagebannerComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  ngOnInit() {
  }

}
