import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OGalleryComponent } from './o-gallery.component';
import { ODefaultImageDirective } from 'projects/obelisco-angular-lib/directives';

@NgModule({
  declarations: [OGalleryComponent],
  imports: [CommonModule, ODefaultImageDirective],
  exports: [OGalleryComponent],
})
export class OGalleryModule {}
