import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private _snackBar: MatSnackBar,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    let selectedTech: Technology | null;
    this.setTechnologies();
    selectedTech = this.getSelectedTechnology();
    if ( selectedTech ) {
      this._snackBar.open(`Ahora mostraré proyectos donde usé '${selectedTech.name}'!!`, 'cerrar', {
        duration: 3000,
      });
    }
  }

  getSelectedTechnology(): Technology | null {
    let techIdFromQuery = this.router.snapshot.queryParams.id;
    let selectedTech = this.technologies.filter(tech => tech.id === techIdFromQuery);
    return selectedTech[0] ? selectedTech[0] : null;
  }

  setTechnologies() {
    this.products.forEach((prod, index) => {
      this.products[index].stack = this.technologies.filter(tech => tech.product ? tech.product?.indexOf(prod.id) != -1 : false)
    })
  }

}
