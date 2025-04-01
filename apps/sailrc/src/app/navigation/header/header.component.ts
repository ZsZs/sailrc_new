import { Component, inject, output } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '@processpuzzle/util';
import { appRoutes } from '../../app.routes';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatIconButton,
  ],
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.css',
})
export class HeaderComponent {
  readonly layoutService = inject(LayoutService);
  readonly router = inject(Router);
  readonly routes = appRoutes.filter((item) => item.title !== null && item.title !== undefined);
  readonly title = 'ProcessPuzzle Testbed';
  readonly toggleSideNav = output<undefined>();

  // region event handlers
  async navigateToHome() {
    await this.router.navigateByUrl('/');
  }

  sidenavToggle() {
    this.toggleSideNav.emit(undefined);
  }
  // endregion
}
