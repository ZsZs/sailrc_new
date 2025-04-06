import { expect } from '@playwright/test';
import { test } from '../fixtures/application-page.fixture';

test.describe('Home page structure', () => {
  test('Application page', async ({ page, applicationPage }) => {
    await applicationPage.gotoHome();
    await expect(page).toHaveTitle('Home');
    expect(applicationPage.appRoot).toBeTruthy();
    expect(applicationPage.appHeader).toBeTruthy();
    expect(applicationPage.appSidenav).toBeTruthy();
    expect(applicationPage.appFooter).toBeTruthy();
  });

  test('Header structure', async ({ applicationPage }) => {
    await applicationPage.gotoHome();
    const header = applicationPage.appHeader;
    const menuButton = header.getByTestId('mat-icon-button');
    expect(menuButton).toBeTruthy();
    expect(header.getByRole('option', { name: 'Sail Race Control' })).toBeTruthy();
  });

  test('Sidenav structure', async ({ applicationPage }) => {
    await applicationPage.gotoHome();
    const sideNav = applicationPage.appSidenav;
    expect(sideNav.getByRole('link', { name: 'Home'})).toBeTruthy();
    expect(sideNav.getByRole('link', { name: 'Plan Race'})).toBeTruthy();
    expect(sideNav.getByRole('link', { name: 'Conduct Race'})).toBeTruthy();
    expect(sideNav.getByRole('link', { name: 'Analyse Race'})).toBeTruthy();
  });

  test('Footer structure', async ({ applicationPage }) => {
    await applicationPage.gotoHome();
    const footer = applicationPage.appFooter;
    expect(footer.getByRole('option', { name: 'SailRC' })).toBeTruthy();
    expect(footer.getByRole('option', { name: 'Copyright 2025' })).toBeTruthy();
  });

  test('Home page', async ({ applicationPage }) => {
    await applicationPage.gotoHome();
    const home = applicationPage.appContent;
    expect(home.getByRole('link', { name: 'Plan Race' })).toBeTruthy();
    expect(home.getByRole('link', { name: 'Conduct Race' })).toBeTruthy();
    expect(home.getByRole('link', { name: 'Analyse Race' })).toBeTruthy();
  });
});
