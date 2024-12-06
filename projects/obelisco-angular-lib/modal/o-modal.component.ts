import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { OCustomContentDirective } from 'projects/obelisco-angular-lib/directives';
import { ModalSizes } from 'projects/obelisco-angular-lib/core/models';

@Component({
  selector: 'o-modal',
  templateUrl: './o-modal.component.html',
  styleUrls: ['./o-modal.component.scss'],
})
export class OModalComponent {
  @Input() public dataTarget!: string;
  @Input() public title!: string;
  @Input() public subtitle!: string;
  @Input() public description!: string;
  @Input() public isHeaderUnbordered: boolean = false;
  @Input() public size: ModalSizes = 'sm';
  @Input() public isScrollable: boolean = false;
  @Input() public isOnTop: boolean = false;
  @Input() public customClasses: string = '';

  @ContentChild(OCustomContentDirective, { static: true })
  oCustomContent?: OCustomContentDirective;
  @ContentChild('children', { read: ElementRef }) children:
    | ElementRef
    | undefined;
}
