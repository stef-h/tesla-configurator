import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ModelSelectComponent } from './model-select/model-select.component';
import { ConfigSelectComponent } from './config-select/config-select.component';
import { SummaryComponent } from './summary/summary.component';
import { ConfigurationService } from './configuration/configuration.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ModelSelectComponent,
    ConfigSelectComponent,
    SummaryComponent,
    MatTabsModule,
    MatGridListModule,
    MatDividerModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public configurationService: ConfigurationService) {}
}
