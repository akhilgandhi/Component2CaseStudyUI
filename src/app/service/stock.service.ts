import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIEndpoints } from '../helper/api-endpoints';
import { ListStock } from '../model/list-stock';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  addStock(stock: Stock) {
    console.log(`calling stock api -- register`, stock);
    return this.httpClient.post<Stock>(`${APIEndpoints.API_ENDPOINT_STOCK_COMMAND}/add/${stock.companyCode}`, stock);
  }

  viewStock(companyCodeIn: string, startDateIn: string, endDateIn: string) {
    console.log(`calling stock api -- get`);
    return this.httpClient.get<ListStock>(`${APIEndpoints.API_ENDPOINT_STOCK_QUERY}/get/${companyCodeIn}/${startDateIn}/${endDateIn}`);
  }

  constructor(private httpClient: HttpClient) { }
}
