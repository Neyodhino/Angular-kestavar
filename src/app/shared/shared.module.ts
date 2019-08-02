import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';

import { SpinnerComponent } from '../sharedUI/spinner/spinner.component';



@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ToastrModule.forRoot()
  ],
  exports: [
    FontAwesomeModule,
    SpinnerComponent
  ]
})
export class SharedModule { }
