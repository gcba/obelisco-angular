import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseRoutingModule } from './collapse-routing.module';
import { OTableModule } from 'obelisco-angular/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { ONavModule } from 'obelisco-angular/nav';
import { CollapseComponent } from './collapse.component';
import { CollapseExamplesComponent } from './pages/collapse-examples/collapse-examples.component';
import { CollapseApiComponent } from './pages/collapse-api/collapse-api.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OCollapseModule } from 'obelisco-angular/collapse/o-collapse.module';
import { OCustomContentDirective } from 'obelisco-angular/directives';

@NgModule({
  declarations: [
    CollapseComponent,
    CollapseExamplesComponent,
    CollapseApiComponent,
  ],
  imports: [
    CommonModule,
    CollapseRoutingModule,
    ONavModule,
    OTableModule,
    OCollapseModule,
    ViewerComponent,
    ClipboardDirective,
    TabsLinkComponent,
    OCustomContentDirective,
    HighlightJsModule,
  ],
})
export class CollapseModule {}
