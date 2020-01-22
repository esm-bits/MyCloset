const utils = require('./utils');

describe('Example', () => {
  beforeEach(async () => {
    await utils.relaunchApp();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.label('Alert'))).toBeVisible();
  });
});
