import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { ONavModule } from 'obelisco-angular/nav';
import { CardApiComponent } from './pages/card-api/card-api.component';
import { CardExamplesComponent } from './pages/card-examples/card-examples.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { OCardModule } from 'obelisco-angular/card';
import { OBadgeModule } from 'obelisco-angular/badge';
import { OTableModule } from 'obelisco-angular/table';
import { HighlightJsModule } from 'ngx-highlight-js';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [CardComponent, CardApiComponent, CardExamplesComponent],
  imports: [
    CommonModule,
    CardRoutingModule,
    ONavModule,
    ViewerComponent,
    OCardModule,
    ClipboardDirective,
    HighlightJsModule,
    OTableModule,
    TabsLinkComponent,
    OBadgeModule,
  ],
})
export class CardModule {}
