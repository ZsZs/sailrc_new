import { test } from '../fixtures/application-page.fixture';

async function verifyNavigationToOverview(page: any, applicationPage: any, linkRole: string, options: object, targetUrl: string, nth?: number) {
  await applicationPage.gotoHome();
  const link = nth != undefined ? page.getByRole(linkRole, options ).nth(nth) : page.getByRole(linkRole, options );
  await link.click();
  await page.waitForURL(targetUrl);
}

test.describe( 'Navigate from home page', () => {
  test('to Race Planning', async ({ page, applicationPage }) => {
    await verifyNavigationToOverview( page, applicationPage, 'link', { name: 'Plan Race' }, '**/race-planning/overview' )
    await verifyNavigationToOverview( page, applicationPage, 'button', { name: 'Go...' }, '**/race-planning/overview', 0 )
    await verifyNavigationToOverview( page, applicationPage, 'button', { name: 'Read more...' }, '**/race-planning/doc', 0 )
  })

  test('to Race Conduction', async ({ page, applicationPage }) => {
    await verifyNavigationToOverview( page, applicationPage, 'link', { name: 'Conduct Race' }, '**/race-conduction/overview' )
    await verifyNavigationToOverview( page, applicationPage, 'button', { name: 'Go...' }, '**/race-conduction/overview', 1 )
    await verifyNavigationToOverview( page, applicationPage, 'button', { name: 'Read more...' }, '**/race-conduction/doc', 1 )
  })

  test('to Race Analysis', async ({ page, applicationPage }) => {
    await verifyNavigationToOverview( page, applicationPage, 'link', { name: 'Analyse Race' }, '**/race-analysis/overview' )
    await verifyNavigationToOverview( page, applicationPage, 'button', { name: 'Go...' }, '**/race-analysis/overview', 2 )
    await verifyNavigationToOverview( page, applicationPage, 'button', { name: 'Read more...' }, '**/race-analysis/doc', 2 )
  })
})
