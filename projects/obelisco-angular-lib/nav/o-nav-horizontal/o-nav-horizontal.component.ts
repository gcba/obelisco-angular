import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { NavHorizontalItems } from 'obelisco-angular-lib/core/models';
import { Sizes } from 'obelisco-angular-lib/core/models';

@Component({
  selector: 'o-nav-horizontal',
  templateUrl: './o-nav-horizontal.component.html',
  styleUrls: ['./o-nav-horizontal.component.scss'],
})
export class ONavHorizontalComponent implements AfterViewInit {
  @Input() public navHorItems: NavHorizontalItems[] = [];
  @Input() public isBordered: boolean = false;
  @Input() public size: Sizes = 'md';
  @Input() public exactRouteActive: boolean = false;
  @Input() public customClasses: string = '';

  @ViewChildren('navLink') public navLinks!: QueryList<ElementRef>;

  constructor(private readonly renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    const indexArr = this.navHorItems.map((_, i) => i);

    this.navLinks.forEach((e, index) => {
      if (
        (e.nativeElement.href === '' || !e.nativeElement.href) &&
        indexArr.includes(index)
      ) {
        this.renderer.setAttribute(
          e.nativeElement,
          'href',
          this.navHorItems[index].link!
        );
      }
    });
  }

  // public scrollToTop(): void {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }
}
