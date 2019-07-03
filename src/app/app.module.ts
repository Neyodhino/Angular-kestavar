import { TransactionService } from './services/transaction/transaction.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './sharedUI/card/card.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FilterComponent } from './transaction/filter/filter.component';
import { DistrictComponent } from './transaction/district/district.component';
import { DataTableComponent } from './transaction/data-table/data-table.component';
import { SidebarComponent } from './sharedUI/sidebar/sidebar.component';
import { FooterComponent } from './sharedUI/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TransactionComponent,
    FilterComponent,
    DistrictComponent,
    DataTableComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    // TransactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
