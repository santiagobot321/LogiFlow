import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-customers',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './customers.component.html',
    styleUrl: './customers.component.css'
})
export class CustomersComponent {
    customerStats = [
        { label: 'Total Clients', value: '1,240', trend: '+5%', color: 'blue' },
        { label: 'Active Now', value: '850', trend: '+12%', color: 'emerald' },
        { label: 'Pending Approval', value: '12', trend: '-2%', color: 'amber' }
    ];

    customers = [
        { id: '49921', name: 'TechGlobal Inc.', type: 'Technology / Enterprise', contact: 'Sarah Jenkins', shipments: 12, status: 'Active', avatar: 'TG' },
        { id: '48832', name: 'FastMove Logistics', type: 'Logistics / Partner', contact: 'Mike Ross', shipments: 8, status: 'Inactive', avatar: 'FL' },
        { id: '47712', name: 'Retail King', type: 'Retail / Global', contact: 'Jessica Pearson', shipments: 45, status: 'Pending', avatar: 'RK' },
        { id: '46421', name: 'Ocean Transport', type: 'Shipping / International', contact: 'Daniel Lee', shipments: 3, status: 'Active', avatar: 'OT' },
        { id: '45119', name: 'Apex Freight', type: 'Cargo / Local', contact: 'Emily Chen', shipments: 21, status: 'Active', avatar: 'AF' }
    ];
}
