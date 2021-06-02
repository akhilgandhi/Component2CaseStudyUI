import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url: string;

  registerCompany(company: Company) {
    console.log(`calling company api -- register`, company);
    return this.httpClient.post<Company>(`${this.url}/register`, company);
  }

  getCompany(companyCode: string) {
    console.log(`calling company api -- info`, companyCode);
    return this.httpClient.get<Company>(`${this.url}/info/${companyCode}`);
  }

  getAllCompanies() {
    console.log(`calling company api -- getall`);
    return this.httpClient.get<Company[]>(`${this.url}/getall`);
  }

  deleteCompany(companyCode: string) {
    console.log(`calling company api -- delete`);
    return this.httpClient.delete(`${this.url}/delete/${companyCode}`);
  }

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8092/company-service/api/v1.0/market/company';
  }
}
