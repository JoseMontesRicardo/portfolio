import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Technology } from '@shared/types/all-types';

@Component({
  selector: 'shared-tech-card',
  templateUrl: './tech-card.component.html',
  styleUrls: ['./tech-card.component.scss']
})
export class TechCardComponent implements OnInit, AfterViewInit {
  isSelected: boolean = false;

  @ViewChild('techCard', { static: false }) element!: ElementRef<HTMLElement>;
  @Output() returnElementEvent = new EventEmitter<ElementRef<HTMLElement>>();
  @Input()
  productData: Product | null = null;

  constructor(
    private router: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  findStack(id: string) {
    return this.productData?.stack?.filter(tech => tech.id === id);
  }

  returnElement(elem: ElementRef<HTMLElement>) {
      this.returnElementEvent.emit(elem);
  }

  ngAfterViewInit(): void {
    let stackFound;
    setTimeout(() => {
      this.router.queryParams.subscribe(params => {
        if (this.productData) {
          stackFound = this.findStack(params.id);
          if (stackFound?.length) {
            this.isSelected = true;
            this.returnElement(this.element);
            // this.element.nativeElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
          }
        }
      });
    }, 200);
  }

}
