import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { NavbarExamplesComponent } from './pages/navbar-examples/navbar-examples.component';
import { NavbarApiComponent } from './pages/navbar-api/navbar-api.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { OTableModule } from 'projects/obelisco-angular-lib/table';
import { ONavModule } from 'projects/obelisco-angular-lib/nav';
import { ONavbarModule } from 'projects/obelisco-angular-lib/navbar';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';

@NgModule({
  declarations: [NavbarComponent, NavbarExamplesComponent, NavbarApiComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    ONavModule,
    OTableModule,
    ONavbarModule,
    ViewerComponent,
    ClipboardDirective,
    HighlightJsModule,
    TabsLinkComponent,
  ],
})
export class NavbarModule {}
