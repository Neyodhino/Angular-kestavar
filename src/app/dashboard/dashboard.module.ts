import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TransactionModule } from './transaction/transaction.module';

import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from '../sharedUI/sideBar/sidebar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    TransactionModule,
    SharedModule
  ],
  exports: [
  ]
})
export class DashboardModule { }
