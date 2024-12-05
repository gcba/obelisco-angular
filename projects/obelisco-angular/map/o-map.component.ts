import { Component, ContentChild, Input, OnInit } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
} from '@angular/platform-browser';
import { MediaIframe } from 'obelisco-angular/core/models';
import { OCustomContentDirective } from 'obelisco-angular/directives';

@Component({
  selector: 'o-map',
  templateUrl: './o-map.component.html',
  styleUrls: ['./o-map.component.scss'],
})
export class OMapComponent {
  constructor(private sanitizer: DomSanitizer) {}

  @Input() public type: 'lateral' | 'institutional' = 'lateral';
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public iframe!: MediaIframe;
  @Input() public customClasses: string = '';

  @ContentChild(OCustomContentDirective, { static: true })
  oCustomContent?: OCustomContentDirective;

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
