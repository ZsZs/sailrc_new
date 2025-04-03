import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { fireEvent, render, screen } from '@testing-library/angular';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Verify component structure', () => {
    it('Should create component', () => {
      expect(component).toBeTruthy();
    });

    it('template structure contains: mat-toolbar:', () => {
      const matToolbar = fixture.debugElement.query(By.css('mat-toolbar')).nativeElement;
      expect(matToolbar).toBeTruthy();
    });
  });
});

describe('Verify DOM event handling', () => {
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
