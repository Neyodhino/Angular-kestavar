import { Transaction } from './../../interfaces/transaction';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions = [
    {
      id: '1',
      reference: 'E494UUH44',
      accountNumber: '1134643455',
      customerName: 'Olaniyi Awofisayo',
      customerAddress: 'Obafemi Awolowo university',
      customerType: 'prepaid',
      amount: 2900,
      commAmount: 100,
      netAmount: 3900,
      district: 'mushin',
      channel: 'pos',
      date: '12/05/2019',
      kilowatts: '397',
      vat: '4761',
      token: '08376987'
    },
    {
      id: '2',
      reference: 'A655A77AHA ',
      accountNumber: '90192092',
      customerName: 'Bamidele Isaac',
      customerAddress: 'Igboya road',
      customerType: 'postpaid',
      amount: 1000,
      commAmount: 100,
      netAmount: 4800,
      district: 'Agbara',
      channel: 'POS',
      date: '22/09/2018',
      kilowatts: '403',
      vat: '4761',
      token: '08376987'
    },
    {
      id: '3',
      reference: 'SKJ99SO09SK',
      accountNumber: '20181721',
      customerName: 'Oluwatosin Steam',
      customerAddress: 'ibadan Road',
      customerType: 'prepaid',
      amount: 2000,
      commAmount: 100,
      netAmount: 29893,
      district: 'Lekki',
      channel: 'Mobile',
      date: '12/2/2019',
      kilowatts: '432',
      vat: '342',
      token: '08376987'
    }
  ]

  constructor() { }

  getAllTransaction():Transaction[]{
    return this.transactions;
  }
}
