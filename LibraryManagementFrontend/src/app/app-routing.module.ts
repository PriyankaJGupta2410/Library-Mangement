import { Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBooksComponent } from './create-books/create-books.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { BooksListComponent } from './books-list/books-list.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { CreateBranchComponent } from './create-branch/create-branch.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { UpdateIssueComponent } from './update-issue/update-issue.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { ReturnListComponent } from './return-list/return-list.component';
import { CreateReturnComponent } from './create-return/create-return.component';
import { UpdateReturnComponent } from './update-return/update-return.component';
import { ReturnDetailsComponent } from './return-details/return-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'books', component:BooksListComponent},
  { path: 'AddBook', component:CreateBooksComponent},
  { path: 'updateBooks/:isbn', component:UpdateBooksComponent},
  { path: 'bookDetails/:isbn',component:BooksDetailsComponent},
  { path: 'branch', component:BranchListComponent},
  { path: 'AddBranch',component:CreateBranchComponent},
  { path: 'updateBranch/:branch_no', component:UpdateBranchComponent},
  { path: 'branchDetails/:branch_no', component:BranchDetailsComponent},
  { path: 'customer', component:CustomerListComponent},
  { path: 'AddCustomer',component:CreateCustomerComponent},
  { path: 'updateCustomer/:customer_id',component:UpdateCustomerComponent},
  { path: 'customerDetails/:customer_id',component:CustomerDetailsComponent},
  { path: 'employee', component:EmployeeListComponent},
  { path: 'AddEmployee', component:CreateEmployeeComponent},
  { path: 'updateEmployee/:employee_id', component:UpdateEmployeeComponent},
  { path: 'employeeDetails/:employee_id',component:EmployeeDetailsComponent},
  { path: 'issueStatus', component:IssueListComponent},
  { path: 'AddIssue', component:CreateIssueComponent},
  { path: 'updateIssue/:issue_id', component:UpdateIssueComponent},
  { path: 'issueDetails/:issue_id', component:IssueDetailsComponent},
  { path: 'returnStatus', component:ReturnListComponent},
  { path: 'AddReturn', component:CreateReturnComponent},
  { path: 'updateReturn/:return_id', component:UpdateReturnComponent},
  { path: 'returnDetails/:return_id', component:ReturnDetailsComponent},
  { path: 'dashboard',component:DashboardComponent},
  { path: 'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
}) 
export class AppRoutingModule { }
