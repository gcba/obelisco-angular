import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OGalleryComponent } from './o-gallery.component';
import { ODefaultImageDirective } from 'obelisco-angular/directives';

@NgModule({
  declarations: [OGalleryComponent],
  imports: [CommonModule, ODefaultImageDirective],
  exports: [OGalleryComponent],
})
export class OGalleryModule {}
