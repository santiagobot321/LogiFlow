import { Routes } from '@angular/router';
import { TrackingComponent } from './tracking/tracking';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShipmentsComponent } from './pages/shipments/shipments.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'shipments', component: ShipmentsComponent },
    { path: 'tracking', component: TrackingComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'settings', component: SettingsComponent }
];
