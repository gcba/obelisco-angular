import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { PanelExamplesComponent } from './pages/panel-examples/panel-examples.component';
import { PanelApiComponent } from './pages/panel-api/panel-api.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { ONavModule } from 'projects/obelisco-angular-lib/nav';
import { OTableModule } from 'projects/obelisco-angular-lib/table';
import { OPanelModule } from 'projects/obelisco-angular-lib/panel';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [PanelComponent, PanelExamplesComponent, PanelApiComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    ONavModule,
    ViewerComponent,
    OPanelModule,
    ClipboardDirective,
    HighlightJsModule,
    OTableModule,
    TabsLinkComponent,
  ],
})
export class PanelModule {}
