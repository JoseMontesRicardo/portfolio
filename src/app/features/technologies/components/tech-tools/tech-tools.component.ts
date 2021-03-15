import { Component, Input, OnInit } from '@angular/core';
import { Product, Technology } from '@shared/types/all-types';

@Component({
  selector: 'tech-tools',
  templateUrl: './tech-tools.component.html',
  styleUrls: ['./tech-tools.component.scss']
})
export class TechToolsComponent implements OnInit {

  @Input()
  techToolsData: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
