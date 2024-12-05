import { Component, Input } from '@angular/core';
import { MediaImage } from 'obelisco-angular/core/models';
@Component({
  selector: 'o-highlighted-image',
  templateUrl: './o-highlighted-image.component.html',
  styleUrls: ['./o-highlighted-image.component.scss'],
})
export class OHighlightedImageComponent {
  constructor() {}
  @Input() public image?: MediaImage;
  @Input() public customClasses: string = '';
}
