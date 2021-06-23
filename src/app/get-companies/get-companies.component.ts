import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-get-companies',
  templateUrl: './get-companies.component.html',
  styleUrls: ['./get-companies.component.css']
})
export class GetCompaniesComponent implements OnInit {

  panelOpenState = false;

  companies: Array<Company>;
  isPresent = false;

  constructor(private companyService: CompanyService, private router: Router) {
    this.companies = [];
  }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  getAllCompanies() {
    this.companyService.getAllCompanies().subscribe(
      data => {
        this.companies = data;
        if (this.companies.length > 0) {
          this.isPresent = true;
        }
      },
      err => {
        console.log('retrieving companies has errors...', err);
      }
    );
  }

  deleteCompany(companyCode: string): void {
    this.companyService.deleteCompany(companyCode).subscribe(
      data => {
        console.log('Delete successfull...', data);

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

}
