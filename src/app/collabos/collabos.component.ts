import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-collabos',
  templateUrl: './collabos.component.html',
  styleUrls: ['./collabos.component.css']
})
export class CollabosComponent implements OnInit {

  public levis = [];
  public bancolotto = [];
  source = '';
  title = 'Collaborations';

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {

    this.bancolotto = this.projectsService.getBancolotto();
    this.levis = this.projectsService.getLevis();

  }

}
