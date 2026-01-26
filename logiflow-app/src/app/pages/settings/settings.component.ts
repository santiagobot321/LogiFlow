import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.css'
})
export class SettingsComponent {
    user = {
        name: 'Alex Morgan',
        email: 'alex@logiflow.com',
        role: 'Logistics Manager'
    };
}
