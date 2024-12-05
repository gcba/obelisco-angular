import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionComponentsRoutingModule } from './section-components-routing.module';
import { OCardModule } from 'obelisco-angular/card';
import { SectionComponentsComponent } from './section-components.component';
import { ONavModule } from 'obelisco-angular/nav';

@NgModule({
  declarations: [SectionComponentsComponent],
  imports: [
    CommonModule,
    SectionComponentsRoutingModule,
    OCardModule,
    ONavModule,
  ],
})
export class SectionComponentsModule {}
