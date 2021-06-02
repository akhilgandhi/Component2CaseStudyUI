# EStockApp

This application acts as UI for E-Stock Market backend. This application has six tabs:

* HOME: User have to click authenticate to get the security token from backend for write operations (Add Company, Delete Company and Add Stock)
* ADD COMPANY: Authenticated user can register a company by providing the company details.
* GET COMPANY: User can get a company details by entering the company code in the Search Box. User can also delete the searched company from here.
* LIST COMPANIES: List of companies will be displayed on this tab. User can also delete a company from here.
* ADD STOCK: Authenticated user can add a stock by providing the company code and stock price.
* VIEW STOCKS: List of stocks added between start and end date will be displayed on this tab when a company code is provided.

# To Run in Development environment

Go to the EStockApp folder and from terminal execute ```ng serve --open```. The application will be available at ```http://localhost:4200/```
