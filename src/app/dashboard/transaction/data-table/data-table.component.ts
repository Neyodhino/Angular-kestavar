import { Component, OnInit } from '@angular/core';
import { faFileExcel, faFile } from "@fortawesome/free-solid-svg-icons";
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Transaction } from 'src/app/interfaces/transaction';
import { ExcelService } from '../../../services/excelService/excel-service.service';
import { ToastrService } from "ngx-toastr";
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  excelIcon = faFileExcel;


  _listFilter: string;

  // get listFilter(): string{
  //   return this._listFilter;
  // }

  // set listfilter(value: string) {
  //   this._listFilter = value;
  //   this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.transactions;
  // }

  transactions: Array<object>;
  filteredProducts: Array<object>;

  constructor(
    private transactionService: TransactionService,
    private excelService: ExcelService,
    private notification: ToastrService
    ) {
      // this.filteredProducts = this.transactions;
      // this.listfilter = '';
     }
    csvOptions = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Kestavar Payment Details:',
      useBom: true,
      noDownload: false,
      headers: ['S/N', 'OrderId', 'Account Number', 'Customer Name', 'Customer Address', 'Customer Type', 'Amount', 'Comm. Amount', 'Net Amount', 'District', 'Channel', 'Date', 'Kilowatts', 'Vat', 'Token', 'Status']
    };
  ngOnInit() {
    // this.transactionService.getServerTransaction().subscribe(res => {
    //   this.transactions = res.Data;
    //   console.log(this.transactions);
    // },
    // err => {
    //   console.log(err);
    // });
    this.transactions = this.transactionService.getAllTransaction();
    console.log(this.transactions);
  }

  // performFilter(filterBy: string) {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.transactions.filter((transaction: Array<object>) =>
  //   transaction.accountNumber.toLocaleLowerCase().indexOf(filterBy) !== -1);
  // }

  exportAsCsv() {
      if (this.transactions.length < 1) {
      this.notification.error("Sorry, No file to downaload at the moment", 'Kestaver Notification');
    } else {
      new AngularCsv(this.transactions, "Kestavar_payment_details", this.csvOptions);
      this.notification.success('File Exported Successfully. Please check your download folder', 'Kestavar Notification')
    }
  }

  exportAsExcel(): void {
    if (this.transactions.length < 1) {
      this.notification.error("Sorry, No file to downaload at the moment", 'Kestaver Notification');
    } else {
      this.excelService.exportAsExcelFile(this.transactions, 'kestavar');
      this.notification.success('File Exported Successfully. Please check your download folder', 'Kestavar Notification')
    }
  }
}


