import { Component, Input, OnInit } from '@angular/core';
import { Technology } from '@shared/types/all-types';

@Component({
  selector: 'home-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  @Input()
  data: Technology[] = [];
  backEndData: Technology[] = [];
  frontEndData: Technology[] = [];
  dbData: Technology[] = [];
  cloudData: Technology[] = [];

  constructor() { }

  ngOnInit(): void {
    this.backEndData = this.data.filter( val => val.stack.code === 'back-end' );
    this.frontEndData = this.data.filter( val => val.stack.code === 'front-end' );
    this.dbData = this.data.filter( val => val.stack.code === 'DB' );
    this.cloudData = this.data.filter( val => val.stack.code === 'cloud' );
  }

}
