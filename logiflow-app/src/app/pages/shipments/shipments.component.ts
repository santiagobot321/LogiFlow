import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-shipments',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './shipments.component.html',
    styleUrl: './shipments.component.css'
})
export class ShipmentsComponent {
    shipments = [
        { id: 'SHP-9281', status: 'In Transit', client: 'Acme Corp', origin: 'Shanghai, CN', destination: 'Los Angeles, USA', eta: 'Oct 24, 2023', avatar: 'AC' },
        { id: 'SHP-9282', status: 'Incident', client: 'Globex Inc', origin: 'Berlin, DE', destination: 'Paris, FR', eta: 'Delayed', avatar: 'GI' },
        { id: 'SHP-9283', status: 'Delivered', client: 'Stark Ind.', origin: 'New York, USA', destination: 'London, UK', eta: 'Oct 20, 2023', avatar: 'SI' },
        { id: 'SHP-9284', status: 'Pending', client: 'Wayne Ent.', origin: 'Gotham, NJ', destination: 'Metropolis, NY', eta: 'Oct 26, 2023', avatar: 'WE' },
        { id: 'SHP-9285', status: 'In Transit', client: 'Umbrella Corp', origin: 'Raccoon City, USA', destination: 'Tokyo, JP', eta: 'Oct 28, 2023', avatar: 'UC' }
    ];
}
