import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../../../shared/components/stat-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StatCardComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  // Datos simulados (Mock) para la tabla
  shipments = [
    { id: '#SHP-2049', customer: 'Acme Corp', route: 'NY -> LA', eta: 'Oct 24, 2023', status: 'In Transit' },
    { id: '#SHP-2050', customer: 'Globex Inc', route: 'TX -> FL', eta: 'Oct 25, 2023', status: 'Delivered' },
    { id: '#SHP-2051', customer: 'Soylent Corp', route: 'WA -> OR', eta: 'Oct 26, 2023', status: 'Delayed' },
  ];
}
