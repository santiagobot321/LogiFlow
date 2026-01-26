import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    kpis = [
        { label: 'Total Active Shipments', value: '1,240', trend: '+5%', icon: 'truck', color: 'blue' },
        { label: 'In Transit', value: '845', trend: '+12%', icon: 'navigation', color: 'indigo' },
        { label: 'Exceptions', value: '12', trend: '-2%', icon: 'alert-triangle', color: 'red' },
        { label: 'Revenue (MTD)', value: '$450k', trend: '+8%', icon: 'dollar-sign', color: 'emerald' }
    ];

    recentShipments = [
        { id: 'SHP-2049', customer: 'Acme Corp', route: 'NY -> LA', eta: 'Oct 24, 2023', status: 'In Transit' },
        { id: 'SHP-2050', customer: 'Globex Inc', route: 'TX -> FL', eta: 'Oct 25, 2023', status: 'Delivered' },
        { id: 'SHP-2051', customer: 'Soylent Corp', route: 'WA -> OR', eta: 'Oct 26, 2023', status: 'Delayed' },
        { id: 'SHP-2052', customer: 'Initech', route: 'IL -> MI', eta: 'Oct 24, 2023', status: 'In Transit' }
    ];
}
