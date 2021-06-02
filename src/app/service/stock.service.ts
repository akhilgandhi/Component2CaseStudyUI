import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moment } from 'moment';
import { ListStock } from '../model/list-stock';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private urlRead: string;
  private urlWrite: string;

  addStock(stock: Stock) {
    console.log(`calling stock api -- register`, stock);
    return this.httpClient.post<Stock>(`${this.urlWrite}/add/${stock.companyCode}`, stock);
  }

  viewStock(companyCodeIn: string, startDateIn: string, endDateIn: string) {
    console.log(`calling stock api -- get`);
    return this.httpClient.get<ListStock>(`${this.urlRead}/get/${companyCodeIn}/${startDateIn}/${endDateIn}`);
  }

  constructor(private httpClient: HttpClient) { 
    this.urlRead = 'http://localhost:8092/stock-query-service/api/v1.0/market/stock';
    this.urlWrite = 'http://localhost:8092/stock-command-service/api/v1.0/market/stock';
  }
}
