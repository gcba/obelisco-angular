import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsFormRoutingModule } from './steps-form-routing.module';
import { StepsFormComponent } from './steps-form.component';
import { StepsFormApiComponent } from './pages/steps-form-api/steps-form-api.component';
import { StepsFormExamplesComponent } from './pages/steps-form-examples/steps-form-examples.component';
import { ONavModule } from 'projects/obelisco-angular-lib/nav';
import { OTableModule } from 'projects/obelisco-angular-lib/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { HighlightJsModule } from 'ngx-highlight-js';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OStepsFormModule } from 'projects/obelisco-angular-lib/steps-form';

@NgModule({
  declarations: [
    StepsFormComponent,
    StepsFormApiComponent,
    StepsFormExamplesComponent,
  ],
  imports: [
    CommonModule,
    StepsFormRoutingModule,
    ONavModule,
    OTableModule,
    OStepsFormModule,
    ViewerComponent,
    HighlightJsModule,
    ClipboardDirective,
    TabsLinkComponent,
  ],
})
export class StepsFormModule {}
