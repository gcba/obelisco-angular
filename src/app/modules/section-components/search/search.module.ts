import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchApiComponent } from './pages/search-api/search-api.component';
import { SearchExamplesComponent } from './pages/search-examples/search-examples.component';
import { TabsLinkComponent } from 'src/app/components/tabs-link/tabs-link.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { HighlightJsModule } from 'ngx-highlight-js';
import { ONavModule } from 'obelisco-angular/nav';
import { OTableModule } from 'obelisco-angular/table';
import { OSearchModule } from 'obelisco-angular/search';

@NgModule({
  declarations: [SearchComponent, SearchApiComponent, SearchExamplesComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ONavModule,
    OTableModule,
    ViewerComponent,
    HighlightJsModule,
    ClipboardDirective,
    TabsLinkComponent,
    OSearchModule,
  ],
})
export class SearchModule {}
