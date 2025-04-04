import { Component, inject, output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LayoutService, SubstringPipe } from '@processpuzzle/util';
import { appRoutes } from '../../app.routes';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { NgClass } from '@angular/common';
import { MatListItemIcon, MatListItemTitle } from '@angular/material/list';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatIconButton,
    MatMenu,
    RouterLink,
    NgClass,
    MatMenuTrigger,
    MatButton,
    MatMenuItem,
    MatListItemIcon,
    MatListItemTitle,
    SubstringPipe
  ],
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.css',
})
export class HeaderComponent {
  readonly layoutService = inject(LayoutService);
  readonly router = inject(Router);
  readonly routes = appRoutes.filter((item) => item.title !== null && item.title !== undefined);
  readonly title = 'Sail Race Control';
  readonly toggleSideNav = output<undefined>();

  // region event handlers
  sidenavToggle() {
    this.toggleSideNav.emit(undefined);
  }
  // endregion
}
