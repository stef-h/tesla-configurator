import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import { Model } from './model';
import { Color } from './color';
import { Config } from './config';

describe('ConfigurationService', () => {
  let configurationService: ConfigurationService;

  beforeEach(() => {
    configurationService = new ConfigurationService({} as HttpClient);
  });

  it('correctly enables step 2', () => {
    expect(configurationService.isStep2Enabled()).toBe(false);
    configurationService.model = { code: '1' } as Model;
    expect(configurationService.isStep2Enabled()).toBe(false);
    configurationService.color = { code: '1' } as Color;
    expect(configurationService.isStep2Enabled()).toBe(true);
  });

  it('correctly enables step 3', () => {
    expect(configurationService.isStep3Enabled()).toBe(false);
    configurationService.model = { code: '1' } as Model;
    configurationService.color = { code: '1' } as Color;
    expect(configurationService.isStep3Enabled()).toBe(false);
    configurationService.config = { id: 1 } as Config;
    expect(configurationService.isStep3Enabled()).toBe(true);
  });

  it('calculates the total cost', () => {
    expect(configurationService.totalCost).toBe(0);
    configurationService.color = { price: 100 } as Color;
    expect(configurationService.totalCost).toBe(100);
    configurationService.config = { price: 200 } as Config;
    expect(configurationService.totalCost).toBe(300);
    configurationService.towHitch = true;
    expect(configurationService.totalCost).toBe(
      300 + configurationService.TOW_HITCH_PRICE
    );
    configurationService.yoke = true;
    expect(configurationService.totalCost).toBe(
      300 +
        configurationService.TOW_HITCH_PRICE +
        configurationService.YOKE_PRICE
    );
  });
});
