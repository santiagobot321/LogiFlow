import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [RouterLink],
    // En sidebar.component.ts
    template: `
      <aside class="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
        <div class="p-6">
          <img src="assets/logo.png" alt="LogiFlow" class="h-8">
        </div>
        <nav class="flex-1 px-4 space-y-2">
          <a href="#" class="flex items-center gap-3 p-3 bg-blue-50 text-blue-600 rounded-lg font-medium">
            <span class="material-icons">dashboard</span> Dashboard
          </a>
          </nav>
      </aside>
    `
})
export class SidebarComponent { }
