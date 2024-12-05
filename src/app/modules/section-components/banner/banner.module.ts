import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';
import { BannerApiComponent } from './pages/banner-api/banner-api.component';
import { BannerExamplesComponent } from './pages/banner-examples/banner-examples.component';
import { ONavModule } from 'obelisco-angular/nav';
import { OBannerModule } from 'obelisco-angular/banner';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { OTableModule } from 'obelisco-angular/table';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonModule } from 'obelisco-angular/button';

@NgModule({
  declarations: [BannerComponent, BannerApiComponent, BannerExamplesComponent],
  imports: [
    CommonModule,
    BannerRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    HighlightJsModule,
    ClipboardDirective,
    OBannerModule,
    TabsLinkComponent,
    OButtonModule,
  ],
})
export class BannerModule {}
