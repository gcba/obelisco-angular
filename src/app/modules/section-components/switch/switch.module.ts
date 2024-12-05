import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchRoutingModule } from './switch-routing.module';
import { SwitchComponent } from './switch.component';
import { SwitchApiComponent } from './pages/switch-api/switch-api.component';
import { SwitchExamplesComponent } from './pages/switch-examples/switch-examples.component';
import { OSwitchModule } from 'obelisco-angular/switch';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { OTableModule } from 'obelisco-angular/table';
import { ONavModule } from 'obelisco-angular/nav';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [SwitchComponent, SwitchApiComponent, SwitchExamplesComponent],
  imports: [
    CommonModule,
    SwitchRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    HighlightJsModule,
    ClipboardDirective,
    OSwitchModule,
    TabsLinkComponent,
  ],
})
export class SwitchModule {}
