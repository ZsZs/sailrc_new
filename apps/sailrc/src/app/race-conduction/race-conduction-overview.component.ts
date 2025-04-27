import { Component, inject } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { LayoutService } from '@processpuzzle/util';
import { NgClass } from '@angular/common';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'sailrc-race-execution',
  templateUrl: './race-conduction-overview.component.html',
  styleUrls: ['./race-conduction-overview.component.css', '../mat-card-grid.css'],
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    RouterLink,
    MatButton,
    NgClass,
    TranslocoDirective
  ]
})
export class RaceConductionOverviewComponent {
  readonly layoutService = inject(LayoutService);
}
