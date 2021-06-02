import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from '../model/stock';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  active = true;
  stock: Stock;

  stockForm = new FormGroup({
    stockId: new FormControl('', [Validators.required]),
    companyCode: new FormControl('', [Validators.required]),
    stockPrice: new FormControl('', [Validators.required])
  });

  // getter/setter
  get stockId() {
    return this.stockForm.get('companyCode');
  }

  set stockId(fmStockId: any) {
    this.stockForm.setValue({
      stockId: fmStockId.value
    });
  }

  get companyCode() {
    return this.stockForm.get('companyCode');
  }

  set companyCode(fmCompanyCode: any) {
    this.stockForm.setValue({
      companyCode: fmCompanyCode.value
    });
  }

  get stockPrice() {
    return this.stockForm.get('stockPrice');
  }

  set stockPrice(fmStockPrice: any) {
    this.stockForm.setValue({
      stockPrice: fmStockPrice.value
    });
  }

  constructor(private router: Router, private actRt: ActivatedRoute, private stockService: StockService) { 
    this.stock = new Stock();
  }

  ngOnInit(): void {

    this.stock.stockId = Math.floor((Math.random() * 100000000) + 1).toString();
  }

  getStockIdBlankMessage() {
    return this.stockId.hasError('required') ? 'stock id field cannot be blank' : '';
  }

  getCompanyCodeBlankMessage() {
    return this.companyCode.hasError('required') ? 'company code field cannot be blank' : '';
  }

  getStockPriceBlankMessage() {
    return this.stockPrice.hasError('required') ? 'company name field cannot be blank' : '';
  }

  resetStockForm(stockFormDir: FormGroupDirective) {
    stockFormDir.directives.forEach(item => {
      // reset all fields except companyCode
      if (item.name !== 'stockId') {
        item.reset();
      }
    });
  }

  submitStock(stockFormDir: FormGroupDirective) {
    console.log('registering company...');
    this.stockService.addStock(this.stock).subscribe(
      data => {
        console.log('api call success', data);
        stockFormDir.resetForm();
        this.stockForm.reset();
        this.stock = new Stock();
        this.stock.stockId = Math.floor((Math.random() * 1000000) + 1).toString();
      }, err => {
        console.log('api call failed', err);
        alert(err.error.message);
      }
    );
  }

}
