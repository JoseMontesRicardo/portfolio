import { Component, Input, OnInit } from '@angular/core';
import { Technology } from '@shared/types/all-types';

@Component({
  selector: 'shared-single-row-card',
  templateUrl: './single-row-card.component.html',
  styleUrls: ['./single-row-card.component.scss']
})
export class SingleRowCardComponent implements OnInit {

  @Input()
  cardData: Technology | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
