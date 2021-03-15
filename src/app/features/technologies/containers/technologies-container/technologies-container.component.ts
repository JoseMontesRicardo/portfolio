import { Component, OnInit } from '@angular/core';
import { Product, Technology } from '@shared/types/all-types';
import { techData } from '../../data/tech-module-data';

@Component({
  selector: 'app-technologies-container',
  templateUrl: './technologies-container.component.html',
  styleUrls: ['./technologies-container.component.scss']
})
export class TechnologiesContainerComponent implements OnInit {

  technologies: Technology[] = techData.technologies
  products: Product[] = techData.products
  // .sort((a, b) => {
  //   if (a.stack.code > b.stack.code) {
  //     return -1;
  //   }
  //   if (a.stack.code < b.stack.code) {
  //     return 1;
  //   }
  //   return 0;
  // });

  constructor() { }

  ngOnInit(): void {
    this.setTechnologies();
  }

  setTechnologies() {
    this.products.forEach((prod, index) => {
      this.products[index].stack = this.technologies.filter(tech => tech.product ? tech.product?.indexOf(prod.id) != -1 : false)
    })
  }

}
