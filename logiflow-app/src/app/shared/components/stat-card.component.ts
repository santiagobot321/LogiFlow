import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div class="flex justify-between items-start">
        <div>
          <p class="text-sm text-gray-500 font-medium">{{ label }}</p>
          <h3 class="text-2xl font-bold mt-1">{{ value }}</h3>
          <span [class]="trendPositive ? 'text-green-500' : 'text-red-500'" class="text-xs font-semibold">
            {{ trend }}
          </span>
        </div>
        <div class="p-2 bg-blue-50 rounded-lg text-blue-600">
          <span class="material-icons">{{ icon }}</span>
        </div>
      </div>
    </div>
  `
})
export class StatCardComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() trend: string = '';
  @Input() trendPositive: boolean = true;
  @Input() icon: string = 'analytics';
}
