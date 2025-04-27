import { Component, inject } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { LayoutService } from '@processpuzzle/util';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'sailrc-race-analysis',
  templateUrl: './race-analysis-overview.component.html',
  styleUrls: ['./race-analysis-overview.component.css', '../mat-card-grid.css'],
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
export class RaceAnalysisOverviewComponent {
  readonly layoutService = inject(LayoutService);
}
