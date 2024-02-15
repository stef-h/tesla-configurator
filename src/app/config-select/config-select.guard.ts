import { inject } from '@angular/core';

import { ConfigurationService } from '../configuration/configuration.service';
import { Router } from '@angular/router';

export const configSelectGuard = () => {
  const configurationService = inject(ConfigurationService);
  const router = inject(Router);

  if (configurationService.isStep2Enabled()) {
    return true;
  }

  // Redirect to the step1
  return router.parseUrl('/step1');
};
