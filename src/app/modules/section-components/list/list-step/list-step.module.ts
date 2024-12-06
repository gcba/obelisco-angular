import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStepRoutingModule } from './list-step-routing.module';
import { ListStepComponent } from './list-step.component';
import { ListStepApiComponent } from './pages/list-step-api/list-step-api.component';
import { ListStepExamplesComponent } from './pages/list-step-examples/list-step-examples.component';
import { ONavModule } from 'projects/obelisco-angular-lib/nav';
import { OTableModule } from 'projects/obelisco-angular-lib/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { OListModule } from 'projects/obelisco-angular-lib/list';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [
    ListStepComponent,
    ListStepApiComponent,
    ListStepExamplesComponent,
  ],
  imports: [
    CommonModule,
    ListStepRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    OListModule,
    TabsLinkComponent,
  ],
})
export class ListStepModule {}
