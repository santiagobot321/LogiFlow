import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-reports',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './reports.component.html',
    styleUrl: './reports.component.css'
})
export class ReportsComponent {
    reportKpis = [
        { label: 'Total Volume', value: '1,240', trend: '+12%', sub: 'vs last month', color: 'emerald' },
        { label: 'In Transit', value: '450', sub: 'Active shipments', color: 'blue' },
        { label: 'On-Time Rate', value: '98.2%', sub: 'Within delivery window', color: 'indigo' },
        { label: 'Exceptions', value: '15', sub: 'Requires Attention', color: 'red' }
    ];

    alerts = [
        { type: 'Delay', id: 'SHP-2891', message: 'Customs clearance held in Rotterdam', date: '2 hours ago', color: 'red' },
        { type: 'Exception', id: 'SHP-3022', message: 'Address verification failed for recipient', date: '5 hours ago', color: 'amber' },
        { type: 'Update', id: 'SHP-1004', message: 'Carrier rerouted due to weather', date: '1 day ago', color: 'blue' }
    ];
}
