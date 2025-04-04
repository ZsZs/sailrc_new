import { RaceConductionComponent } from './race-conduction.component';
import { render, screen } from '@testing-library/angular';

describe('RaceConductionComponent', () => {

  it('should create mat-cards with links', async () => {
    await render(RaceConductionComponent);
    expect(screen.getByRole('link', { name: 'Participants'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Field'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Start'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Finish'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Trace'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Broadcast'})).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Chat'})).toBeTruthy();
  });
});
