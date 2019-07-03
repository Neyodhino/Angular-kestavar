import { Component, OnInit } from '@angular/core';
import { faFileExcel, faFile } from "@fortawesome/free-solid-svg-icons";
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Transaction } from 'src/app/interfaces/transaction';
import { ExcelService } from '../../services/excelService/excel-service.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  excelIcon = faFileExcel;

  transactions:Transaction[];

  constructor(
    private transactionService: TransactionService,
    private excelService: ExcelService,
    private notification: ToastrService
    ) { }

  ngOnInit() {
    this.transactions = this.transactionService.getAllTransaction();
  }
  exportAsExcel():void{
    if (this.transactions.length < 1) {
      this.notification.error("Sorry, No file to downaload at the moment", "Kestaver Notification")
    } else {
      this.excelService.exportAsExcelFile(this.transactions, 'kestavar');
      this.notification.success('File Exported Successfully. Please check your download folder', 'Kestavar Notification')  
    }
  }
}


