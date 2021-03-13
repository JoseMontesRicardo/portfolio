import { Component, OnInit } from '@angular/core';
import { Technology } from '@shared/types/all-types';
import { techData } from '../../data/tech-module-data';

@Component({
  selector: 'app-technologies-container',
  templateUrl: './technologies-container.component.html',
  styleUrls: ['./technologies-container.component.scss']
})
export class TechnologiesContainerComponent implements OnInit {

  technologies: Technology[] = techData.technologies.sort((a, b) => {
    if (a.stack.code > b.stack.code) {
      return -1;
    }
    if (a.stack.code < b.stack.code) {
      return 1;
    }
    return 0;
  });

  constructor() { }

  ngOnInit(): void {
  }

}
