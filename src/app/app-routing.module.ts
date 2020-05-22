import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ReportsComponent } from './components/reports/reports.component';
import { Error404Component } from './components/error404/error404.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent, data: { title: 'Home - Neo Group Assignment'} },
  { path:'alerts', component: AlertsComponent, data: { title: 'Alerts - Neo Group Assignment'} },
  { path:'resources', component: ResourcesComponent, data: { title: 'Resources - Neo Group Assignment'} },
  { path:'reports', component: ReportsComponent, data: { title: 'Reports - Neo Group Assignment'} },
  { path: '**', component: Error404Component, data: { title: '404 - Page Not Found' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
