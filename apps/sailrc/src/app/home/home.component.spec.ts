import { render, screen } from '@testing-library/angular';
import { HomeComponent } from './home.component';

describe('ContentComponent', () => {
  it('should create mat-cards with links', async () => {
    await render(HomeComponent);
    expect(screen.getByRole('link', { name: 'Plan Race'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Conduct Race'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Analyse Race'})).toBeTruthy();
  });
});
