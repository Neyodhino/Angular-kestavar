import { Component, OnInit } from '@angular/core';
import { faFileExcel, faFile } from "@fortawesome/free-solid-svg-icons";
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Transaction } from 'src/app/interfaces/transaction';
import { ExcelService } from '../../services/excelService/excel-service.service';

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
    private excelService: ExcelService
    ) { }

  ngOnInit() {
    this.transactions = this.transactionService.getAllTransaction();
  }
  exportAsExcel():void{
      this.excelService.exportAsExcelFile(this.transactions, 'kestavar')
  }
}


