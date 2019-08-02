import { HttpClient } from '@angular/common/http';
import { Transaction } from './../../interfaces/transaction';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'https://api-dev.payments-platform.kestavarltd.com/';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions = [
    {
      id: '1',
      reference: '327001397012843000000',
      accountNumber: '01325902730',
      customerName: 'Sayo Oladeji',
      customerAddress: 'LEKKI, 1 PROVIDENCE STREET',
      customerType: 'PREPAID',
      amount: 1000,
      commAmount: 20,
      netAmount: 980,
      district: 'Lekki',
      channel: 'Mobile',
      date: '2019-02-28 23:50:48.0',
      kilowatts: '39.7',
      vat: '47.61',
      token: '6273423505725980000',
      status: 'success'
    },
    {
      id: '2',
      reference: '02DT987189F06109IK22',
      accountNumber: '54130102715',
      customerName: 'SAMUEL OSINACHI',
      customerAddress: 'Back of Millenium est. Lagos(lekki)',
      customerType: 'PREPAID',
      amount: 1000,
      commAmount: 20,
      netAmount: 980,
      district: 'Lekki',
      channel: 'MOBILE',
      date: '2019-02-28 23:50:48.0',
      kilowatts: '37.0',
      vat: '476.1',
      token: '21974832717873470284',
      status: 'success'
    },
    {
      id: '3',
      reference: '0327002122022994680234',
      accountNumber: '0925501588012',
      customerName: 'IGBEKELE OMAGORIA',
      customerAddress: 'PHCN H/EST IKOTA, 549 A, AJAH',
      customerType: 'POSTPAID',
      amount: 5000,
      commAmount: 100,
      netAmount: 4900,
      district: 'Mushin',
      channel: 'Mobile',
      date: '2019-02-28 23:50:48.0',
      status: 'success'
    },
    {
      id: '4',
      reference: '02JK679452D3860QAD83',
      accountNumber: '0101160331928',
      customerName: 'AWOFISAYO OLANIYI',
      customerAddress: 'VGC, P22 R3 ROAD 3 VICTORIA GARDEN CITY',
      customerType: 'PREPAID',
      amount: 10000,
      commAmount: 200,
      district: 'Lekki',
      netAmount: 9800,
      channel: 'Mobile',
      date: '2019-02-28 23:50:48.0',
      kilowatts: '328.5',
      vat: '476.19',
      token: '55840343424001210324',
      status: 'success'
    },
    {
      id: '5',
      reference: '02QJ388705673275OBL4',
      accountNumber: '0101160203192',
      customerName: 'BAMIDELE ISAAC',
      customerAddress: 'ABIJOH, 22 UN-DEFINED STREET',
      customerType: 'PREPAID',
      amount: 4700,
      commAmount: 92,
      netAmount: 4608,
      district: 'Ijora',
      channel: 'Mobile',
      date: '2019-02-28 23:50:48.0',
      kilowatts: '43.2',
      vat: '32.2',
      token: '05829374246439716416',
      status: 'success'
    }
  ];

  constructor(
    private http: HttpClient
  ) { }

  public getServerTransaction(): Observable<any> {
    return this.http.get(`${BASE_URL}api/v1/cicod/transactions?startDate=2019-06-28T15%3A46%3A44.964Z&endDate=2019-07-12T15%3A46%3A44.964Z`);
  }

  getAllTransaction() {
    return this.transactions;
  }
}
