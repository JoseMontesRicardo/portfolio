import { Component, OnInit } from '@angular/core';
import { Technology } from '@shared/types/all-types';
import { homeData } from '../../data/home-module-data';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  technologies : Technology[] = homeData.technologies;

  constructor() { }

  ngOnInit(): void {
  }

}
