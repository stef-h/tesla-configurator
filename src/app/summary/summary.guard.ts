import { inject } from '@angular/core';

import { ConfigurationService } from '../configuration/configuration.service';
import { Router } from '@angular/router';

export const summaryGuard = () => {
  const configurationService = inject(ConfigurationService);
  const router = inject(Router);

  if (configurationService.isStep3Enabled()) {
    return true;
  }

  // Redirect to the step2
  return router.parseUrl('/step2');
};
