import { Component, inject } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { LayoutService } from '@processpuzzle/util';
import { NgClass } from '@angular/common';

@Component( {
  selector: 'sailrc-race-preparation',
  templateUrl: './race-planning-overview.component.html',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    RouterLink,
    MatButton,
    NgClass,
  ],
  styleUrls: [ './race-planning-overview.component.css', '../mat-card-grid.css' ]
})
export class RacePlanningOverviewComponent {
  readonly layoutService = inject(LayoutService);
}
