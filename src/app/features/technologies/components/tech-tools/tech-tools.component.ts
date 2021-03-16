import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Product, Technology } from '@shared/types/all-types';

@Component({
  selector: 'tech-tools',
  templateUrl: './tech-tools.component.html',
  styleUrls: ['./tech-tools.component.scss']
})
export class TechToolsComponent implements OnInit {

  cardsElems: ElementRef<HTMLElement>[] = [];

  @Input()
  techToolsData: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    // window.scrollTo({ top: 0 });
  }

  getElement(elem: ElementRef<HTMLElement>) {
    if (this.cardsElems.length === 0) {
      this.cardsElems.push(elem);
      this.cardsElems[0].nativeElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
    }
  }

}
