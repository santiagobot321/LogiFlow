import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tracking',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tracking.html',
    styleUrl: './tracking.css'
})
export class TrackingComponent {
    shipment = {
        id: 'LGF-8923',
        status: 'In Transit',
        eta: 'Oct 24, 2023 - 14:00',
        type: 'Electronics / Palletized',
        origin: {
            city: 'Hamburg, DE',
            location: 'Warehouse H-22'
        },
        destination: {
            city: 'Lyon, FR',
            location: 'Distribution Center L-01'
        },
        carrier: {
            name: 'DHL Express',
            service: 'Express Worldwide'
        },
        weight: '450 kg',
        pallets: 12,
        history: [
            {
                status: 'Arrived at Distribution Center',
                location: 'Lyon, FR',
                time: 'Oct 24, 13:50',
                relativeTime: '10 mins ago',
                completed: true,
                current: true
            },
            {
                status: 'Departed Hub',
                location: 'Stuttgart, DE',
                time: 'Oct 24, 08:30',
                relativeTime: '5 hours ago',
                completed: true
            },
            {
                status: 'Processed at Sort Facility',
                location: 'Hamburg, DE',
                time: 'Oct 23, 18:45',
                completed: true
            },
            {
                status: 'Shipment Picked Up',
                location: 'Hamburg, DE',
                time: 'Oct 23, 09:00',
                relativeTime: '1 day ago',
                completed: true
            }
        ],
        cargo: {
            packageType: 'Standard Pallets (EUR)',
            dimensions: '120 x 80 x 144 cm'
        }
    };
}
