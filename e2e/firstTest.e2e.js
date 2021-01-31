describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have SecondaryText', async () => {
    await expect(element(by.id('SecondaryText'))).toBeVisible();
  });

  it('should show hello screen after tap SearchButton', async () => {
    await element(by.id('SearchButton')).tap();
    await expect(element(by.text('Search Results'))).toBeVisible();
  });

});
