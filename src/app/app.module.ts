import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCompanyComponent } from './add-company/add-company.component';
import { GetCompanyComponent } from './get-company/get-company.component';
import { GetCompaniesComponent } from './get-companies/get-companies.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { GetStockComponent } from './get-stock/get-stock.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
// import {MatRippleModule} from '@angular/material/core';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatTableModule} from '@angular/material/table';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatSortModule} from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter, MomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_DATE_FORMATS } from './helper/my-date-formats';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { HttpInterceptService } from './service/http-intercept.service';
import { MomentUtcDateAdapter } from './helper/moment-utc-date-adapter';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddCompanyComponent,
    GetCompanyComponent,
    GetCompaniesComponent,
    AddStockComponent,
    GetStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    // MatRippleModule,
    // MatDialogModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MomentDateModule
    // MatTooltipModule
    // MatMenuModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentUtcDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    }, 
    { 
      provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS,
    },
    AuthGuardService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
