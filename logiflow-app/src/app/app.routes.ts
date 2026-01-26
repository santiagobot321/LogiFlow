import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout.component';
// Añadimos "/components/" a la ruta:
import { DashboardComponent } from './features/dashboard/components/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
