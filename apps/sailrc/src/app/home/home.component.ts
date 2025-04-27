import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { LayoutService } from '@processpuzzle/util';
import { NgClass } from '@angular/common';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-content',
  templateUrl: './home.component.html',
  imports: [ MatCardModule, RouterLink, MatButton, NgClass, TranslocoDirective ],
  styleUrls: ['./home.component.css', '../mat-card-grid.css'],
})
export class HomeComponent {
  readonly layoutService = inject(LayoutService);
}
