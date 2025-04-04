import { RacePlanningComponent } from './race-planning.component';
import { render, screen } from '@testing-library/angular';

describe('RacePlanningComponent', () => {

  it('should create mat-cards with links', async () => {
    await render(RacePlanningComponent);
    expect(screen.getByRole('link', { name: 'Races'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Sailors'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Sailing Organizations'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Boats'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Boat Classes'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Sailing Places'})).toBeTruthy();
  });
});
