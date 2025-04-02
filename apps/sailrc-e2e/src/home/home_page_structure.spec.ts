import { expect } from '@playwright/test';
import { test } from '../fixtures/application-page.fixture';

test.describe('Home page structure', () => {
  test('Home page', async ({ page, applicationPage }) => {
    await applicationPage.goto();
    await expect(page).toHaveTitle('SailRC - Home');
    expect(applicationPage.appRoot).toBeTruthy();
    expect(applicationPage.appHeader).toBeTruthy();
    expect(applicationPage.appSidenav).toBeTruthy();
    expect(applicationPage.appFooter).toBeTruthy();
  });

  test('Header structure', async ({ applicationPage }) => {
    await applicationPage.goto();
    const header = applicationPage.appHeader;
    expect(header).toBeTruthy();
  });
});
