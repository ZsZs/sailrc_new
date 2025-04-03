import { HeaderComponent } from './header.component';
import { fireEvent, render, screen } from '@testing-library/angular';

describe('HeaderComponent', () => {
  describe('Verify component structure', () => {
    it('Should create component', async () => {
      const { fixture } = await render(HeaderComponent);
      expect(fixture.componentInstance).toBeTruthy();
    });

    it('template structure contains: mat-toolbar:', async () => {
      await render(HeaderComponent);
      const matToolbar = screen.getByTestId('header-toolbar');
      expect(matToolbar).toBeTruthy();
    });
  });

  describe('Verify DOM event handling', () => {
    it('Call toggleSideNav', async () => {
      const { fixture } = await render(HeaderComponent);
      const spy = jest.spyOn(fixture.componentInstance.toggleSideNav, 'emit');
      const menuButton = screen.getByTestId('sidenav-toggle');
      fireEvent.click(menuButton);
      expect(spy).toHaveBeenCalled();
    });

    it('Click on menu button emits an undefined event', async () => {
      const toggleSideNavSpy = jest.fn();
      await render( HeaderComponent, { on: {
          toggleSideNav: toggleSideNavSpy,
        }});
      const menuButton = screen.getByTestId('sidenav-toggle');
      fireEvent.click(menuButton);
      expect(toggleSideNavSpy).toHaveBeenCalled();
    })
  })
});
