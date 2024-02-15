import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration/configuration.service';
import { Option } from '../configuration/option';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-config-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './config-select.component.html',
  styleUrl: './config-select.component.scss',
})
export class ConfigSelectComponent implements OnInit {
  option: Option | undefined = undefined;

  constructor(public configurationService: ConfigurationService) {}

  ngOnInit() {
    this.configurationService
      .getOption()
      .subscribe((option) => (this.option = option));
  }
}
