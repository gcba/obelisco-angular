import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './dropdown.component';
import { ONavModule } from 'obelisco-angular/nav';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, DropdownRoutingModule, ONavModule],
})
export class DropdownModule {}
