import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusMessageRoutingModule } from './status-message-routing.module';
import { StatusMessageComponent } from './status-message.component';
import { StatusMessageApiComponent } from './pages/status-message-api/status-message-api.component';
import { StatusMessageExampleComponent } from './pages/status-message-example/status-message-example.component';
import { ONavModule } from 'obelisco-angular/nav';
import { OTableModule } from 'obelisco-angular/table';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { OButtonModule } from 'obelisco-angular/button';
import { OStatusMessageModule } from 'obelisco-angular/status-message';

@NgModule({
  declarations: [
    StatusMessageComponent,
    StatusMessageApiComponent,
    StatusMessageExampleComponent,
  ],
  imports: [
    CommonModule,
    StatusMessageRoutingModule,
    OStatusMessageModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
    OButtonModule,
  ],
})
export class StatusMessageModule {}
