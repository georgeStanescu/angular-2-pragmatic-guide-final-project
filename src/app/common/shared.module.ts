import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent }   from './spinner.component';
import { PaginationComponent } from "./pagination.component";

@NgModule({
  imports: [ CommonModule ],
  exports: [ SpinnerComponent, PaginationComponent ],
  declarations: [ SpinnerComponent, PaginationComponent ],
  providers: [],
})
export class SharedModule { }
