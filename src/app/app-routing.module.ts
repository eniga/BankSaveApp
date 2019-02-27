import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'createaccount', loadChildren: './createaccount/createaccount.module#CreateaccountPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'supplies', loadChildren: './supplies/supplies.module#SuppliesPageModule' },
  { path: 'sales', loadChildren: './sales/sales.module#SalesPageModule' },
  { path: 'expenses', loadChildren: './expenses/expenses.module#ExpensesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
