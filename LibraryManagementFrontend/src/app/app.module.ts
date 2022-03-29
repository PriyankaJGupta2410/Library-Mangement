import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBooksComponent } from './create-books/create-books.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { BooksListComponent } from './books-list/books-list.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { CreateBranchComponent } from './create-branch/create-branch.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { UpdateIssueComponent } from './update-issue/update-issue.component';
import { ReturnDetailsComponent } from './return-details/return-details.component';
import { ReturnListComponent } from './return-list/return-list.component';
import { CreateReturnComponent } from './create-return/create-return.component';
import { UpdateReturnComponent } from './update-return/update-return.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBooksComponent,
    BooksDetailsComponent,
    BooksListComponent,
    UpdateBooksComponent,
    BranchDetailsComponent,
    BranchListComponent,
    CreateBranchComponent,
    UpdateBranchComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    IssueDetailsComponent,
    IssueListComponent,
    CreateIssueComponent,
    UpdateIssueComponent,
    ReturnDetailsComponent,
    ReturnListComponent,
    CreateReturnComponent,
    UpdateReturnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
