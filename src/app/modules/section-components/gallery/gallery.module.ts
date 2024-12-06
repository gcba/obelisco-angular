import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OGalleryModule } from 'projects/obelisco-angular-lib/gallery';
import { ONavModule } from 'projects/obelisco-angular-lib/nav';
import { OTableModule } from 'projects/obelisco-angular-lib/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GalleryApiComponent } from './pages/gallery-api/gallery-api.component';
import { GalleryExamplesComponent } from './pages/gallery-examples/gallery-examples.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryApiComponent,
    GalleryExamplesComponent,
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    ONavModule,
    OTableModule,
    OGalleryModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
  ],
})
export class GalleryModule {}
