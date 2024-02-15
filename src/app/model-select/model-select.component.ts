import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Model } from '../configuration/model';
import { ConfigurationService } from '../configuration/configuration.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-model-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgOptimizedImage,
  ],
  templateUrl: './model-select.component.html',
  styleUrl: './model-select.component.scss',
})
export class ModelSelectComponent implements OnInit {
  readonly IMG_BASE_URL: string = 'https://interstate21.com/tesla-app/images';
  models: Model[] = [];

  constructor(public configurationService: ConfigurationService) {}

  ngOnInit() {
    this.configurationService
      .getModels()
      .subscribe((models) => (this.models = models));
  }

  resetToFirstColor() {
    this.configurationService.color =
      this.configurationService.model?.colors[0];
  }

  get src(): string {
    return `${this.IMG_BASE_URL}/${this.configurationService.model?.code}/${this.configurationService.color?.code}.jpg`;
  }
}
