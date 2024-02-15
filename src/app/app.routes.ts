import { Routes } from '@angular/router';
import { ModelSelectComponent } from './model-select/model-select.component';
import { ConfigSelectComponent } from './config-select/config-select.component';
import { SummaryComponent } from './summary/summary.component';
import { configSelectGuard } from './config-select/config-select.guard';
import { summaryGuard } from './summary/summary.guard';

export const routes: Routes = [
  { path: 'model', component: ModelSelectComponent },
  {
    path: 'config',
    component: ConfigSelectComponent,
    canActivate: [configSelectGuard],
  },
  {
    path: 'summary',
    component: SummaryComponent,
    canActivate: [summaryGuard],
  },
  { path: '**', redirectTo: 'model' },
];
