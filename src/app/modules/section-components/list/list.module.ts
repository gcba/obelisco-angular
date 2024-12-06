import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { OListModule } from 'projects/obelisco-angular-lib/list';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule, OListModule],
})
export class ListModule {}
