import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  active = true;
  company: Company;

  registerForm = new FormGroup({
    companyCode: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
    companyCEO: new FormControl('', [Validators.required]),
    companyTurnOver: new FormControl('', [Validators.required, Validators.min(100000000)]),
    companyWebsite: new FormControl('', [Validators.required]),
    companyStockExchange: new FormControl('', [Validators.required])
  });

  // getter/setter
  get companyCode() {
    return this.registerForm.get('companyCode');
  }

  set companyCode(fmCompanyCode: any) {
    this.registerForm.setValue({
      companyCode: fmCompanyCode.value
    });
  }

  get companyName() {
    return this.registerForm.get('companyName');
  }

  set companyName(fmCompanyName: any) {
    this.registerForm.setValue({
      companyName: fmCompanyName.value
    });
  }

  get companyCEO() {
    return this.registerForm.get('companyCEO');
  }

  set companyCEO(fmCompanyCEO: any) {
    this.registerForm.setValue({
      companyName: fmCompanyCEO.value
    });
  }

  get companyTurnOver() {
    return this.registerForm.get('companyTurnOver');
  }

  set companyTurnOver(fmCompanyTurnOver: any) {
    this.registerForm.setValue({
      companyCode: fmCompanyTurnOver.value
    });
  }

  get companyWebsite() {
    return this.registerForm.get('companyWebsite');
  }

  set companyWebsite(fmCompanyWebsite: any) {
    this.registerForm.setValue({
      companyWebsite: fmCompanyWebsite.value
    });
  }

  get companyStockExchange() {
    return this.registerForm.get('companyStockExchange');
  }

  set companyStockExchange(fmCompanyStockExchange: any) {
    this.registerForm.setValue({
      companyStockExchange: fmCompanyStockExchange.value
    });
  }


  constructor(private router: Router, private actRt: ActivatedRoute, private companyService: CompanyService) { 
    this.company = new Company();
  }

  ngOnInit(): void {

    this.company.companyCode = Math.floor((Math.random() * 1000000) + 1).toString();
  }

  resetRegisterForm(registerFormDir: FormGroupDirective) {
    registerFormDir.directives.forEach(item => {
      // reset all fields except companyCode
      if (item.name !== 'companyCode') {
        item.reset();
      }
    });
  }

  submitCompany(registerFormDir: FormGroupDirective) {
    console.log('registering company...');
    this.companyService.registerCompany(this.company).subscribe(
      data => {
        console.log('api call success', data);
        registerFormDir.resetForm();
        this.registerForm.reset();
        this.company = new Company();
        this.company.companyCode = Math.floor((Math.random() * 1000000) + 1).toString();
      }, err => {
        console.log('api call failed', err);
        alert(err.error.message);
      }
    );
  }

  getCompanyCodeBlankMessage() {
    return this.companyCode.hasError('required') ? 'company code field cannot be blank' : '';
  }

  getCompanyNameBlankMessage() {
    return this.companyName.hasError('required') ? 'company name field cannot be blank' : '';
  }

  getCompanyCEOBlankMessage() {
    return this.companyCEO.hasError('required') ? 'company CEO field cannot be blank' : '';
  }

  getCompanyTurnOverBlankMessage() {
    return this.companyTurnOver.hasError('required') ? 'company turn over field cannot be blank' : '';
  }

  getCompanyTurnOverMinMessage() {
    return this.companyTurnOver.hasError('min') ? 'company turn over must be greater than 10Cr' : '';
  }

  getCompanyWebsiteBlankMessage() {
    return this.companyWebsite.hasError('required') ? 'company website field cannot be blank' : '';
  }

  getCompanyStockExchangeBlankMessage() {
    return this.companyStockExchange.hasError('required') ? 'company stock exchange field cannot be blank' : '';
  }
}
