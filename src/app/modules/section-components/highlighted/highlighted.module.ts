import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ONavModule } from 'projects/obelisco-angular-lib/nav';

import { HighlightedRoutingModule } from './highlighted-routing.module';
import { HighlightedComponent } from './highlighted.component';
import { HighlightedApiComponent } from './pages/highlighted-api/highlighted-api.component';
import { HighlightedExamplesComponent } from './pages/highlighted-examples/highlighted-examples.component';
import { OTableModule } from 'projects/obelisco-angular-lib/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OHighlightedModule } from 'projects/obelisco-angular-lib/highlighted/o-highlighted.module';
import { OButtonModule } from 'projects/obelisco-angular-lib/button';
import { OAccessModule } from 'projects/obelisco-angular-lib/access';

@NgModule({
  declarations: [
    HighlightedComponent,
    HighlightedApiComponent,
    HighlightedExamplesComponent,
  ],
  imports: [
    CommonModule,
    HighlightedRoutingModule,
    ONavModule,
    CommonModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
    OHighlightedModule,
    OButtonModule,
    OAccessModule,
  ],
})
export class HighlightedModule {}
