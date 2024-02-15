import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Model } from './model';
import { Color } from './color';
import { Option } from './option';
import { Config } from './config';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  readonly TOW_HITCH_PRICE: number = 1000;
  readonly YOKE_PRICE: number = 1000;

  models: Model[] = [];
  options: Map<string, Option> = new Map();

  #model: Model | undefined;
  #color: Color | undefined;
  #config: Config | undefined;
  #towHitch: boolean = false;
  #yoke: boolean = false;

  constructor(private http: HttpClient) {}

  getModels(): Observable<Model[]> {
    return this.models.length > 0
      ? of(this.models)
      : this.http
          .get<Model[]>('/models')
          .pipe(tap((models) => (this.models = models)));
  }

  getOption(): Observable<Option> {
    const modelCode = this.model!.code;
    return this.options.has(modelCode)
      ? of(this.options.get(modelCode)!)
      : this.http
          .get<Option>('/options/' + modelCode)
          .pipe(tap((option) => this.options.set(modelCode, option)));
  }

  isStep2Enabled(): boolean {
    return this.model !== undefined && this.color !== undefined;
  }

  isStep3Enabled(): boolean {
    return this.isStep2Enabled() && this.config !== undefined;
  }

  get totalCost(): number {
    return (
      (this.color?.price ?? 0) +
      (this.config?.price ?? 0) +
      (this.towHitch ? this.TOW_HITCH_PRICE : 0) +
      (this.yoke ? this.YOKE_PRICE : 0)
    );
  }

  get model(): Model | undefined {
    return this.#model;
  }

  set model(model: Model | undefined) {
    this.#model = model;
    this.color = undefined;
    this.config = undefined;
    this.towHitch = false;
    this.yoke = false;
  }

  get color(): Color | undefined {
    return this.#color;
  }

  set color(color: Color | undefined) {
    this.#color = color;
  }

  get config(): Config | undefined {
    return this.#config;
  }

  set config(config: Config | undefined) {
    this.#config = config;
  }

  get towHitch(): boolean {
    return this.#towHitch;
  }

  set towHitch(towHitch: boolean) {
    this.#towHitch = towHitch;
  }

  get yoke(): boolean {
    return this.#yoke;
  }

  set yoke(yoke: boolean) {
    this.#yoke = yoke;
  }
}
