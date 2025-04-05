import { RaceAnalysisOverviewComponent } from './race-analysis-overview.component';
import { render, screen } from '@testing-library/angular';

describe('RaceAnalysisComponent', () => {

  it('should create mat-cards with links', async () => {
    await render(RaceAnalysisOverviewComponent);
    expect(screen.getByRole('link', { name: 'Results'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Replay'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Analyse'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Chat'})).toBeTruthy();
  });
});
