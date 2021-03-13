import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Technology } from '@shared/types/all-types';

@Component({
  selector: 'shared-tech-card',
  templateUrl: './tech-card.component.html',
  styleUrls: ['./tech-card.component.scss']
})
export class TechCardComponent implements OnInit, AfterViewInit {
  isSelected: boolean = false;

  @ViewChild('techCard', { static: false }) element!: ElementRef<HTMLElement>;

  @Input()
  techCardData: Technology | null = null;

  constructor(
    private router: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.router.queryParams.subscribe(params => {
        if (this.techCardData) {
          if (params.id === this.techCardData.id) {
            this.isSelected = this.techCardData.id === params.id;
            console.log(this.element)
            this.element.nativeElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
          }
        }
      });
    }, 100);
  }

}
