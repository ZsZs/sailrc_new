import { render, screen } from '@testing-library/angular';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  it('should create Title', async () => {
    await render(FooterComponent);
    expect(screen.getByRole('option', { name: 'SailRC'})).toBeTruthy();
    expect(screen.getByRole('option', { name: 'Copyright 2025'})).toBeTruthy();
  });
});
