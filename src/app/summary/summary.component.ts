import { Component } from '@angular/core';
import { ConfigurationService } from '../configuration/configuration.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  constructor(public configurationService: ConfigurationService) {}
}
