import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

//All component declaration
import { TransactionComponent } from './transaction.component';
import { FilterComponent } from './filter/filter.component';
import { DistrictComponent } from './district/district.component';
import { DataTableComponent } from './data-table/data-table.component';



@NgModule({
  declarations: [
    TransactionComponent,
    FilterComponent,
    DistrictComponent,
    DataTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TransactionComponent
  ]
})
export class TransactionModule { }
