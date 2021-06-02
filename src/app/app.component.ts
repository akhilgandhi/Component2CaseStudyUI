import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EStockApp';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'HOME',
        link: './dashboard',
        index: 0
      },
      {
        label: 'ADD COMPANY',
        link: './add-company',
        index: 1
      },
      {
        label: 'GET COMPANY',
        link: './get-company',
        index: 2
      },
      {
        label: 'LIST COMPANIES',
        link: './get-companies',
        index: 3
      },
      {
        label: 'ADD STOCK',
        link: './add-stock',
        index: 4
      },
      {
        label: 'VIEW STOCKS',
        link: './get-stock',
        index: 4
      }
    ]
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
