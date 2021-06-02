import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent implements OnInit {

  active = true;
  company: Company;

  constructor(private companyService: CompanyService, private router: Router) {
    this.company = new Company();
  }

  ngOnInit(): void {
  }

  getCompany(companyCode: string): void {
    if (companyCode === '') {
      this.company = new Company();
    }
    else {
      this.companyService.getCompany(companyCode).subscribe(
        data => {
          console.log('company data... ', data);
          this.company = data;
        },
        err => {
          console.log('error...', err);
        }
      );
    }
  }

  reset(companyCode: string): void {
    if (companyCode === '') {
      this.company = new Company();
    }
  }

  deleteCompany(): void { 
    this.companyService.deleteCompany(this.company.companyCode).subscribe(
      data => {
        console.log('Delete successfull...', data);
        this.company = new Company();
        // save current route first
        const currentRoute = this.router.url;
    
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([currentRoute]); // navigate to same route
        }); 
      },
      err => {
        console.log('Error while delete...', err.message);
      }
    )
  }

  isValid() {
    if (this.company.companyCode === '') {
      return false;
    }
    return true;
  }

}
