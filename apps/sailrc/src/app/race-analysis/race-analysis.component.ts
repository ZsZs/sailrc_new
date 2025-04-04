import { Component, inject } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { LayoutService } from '@processpuzzle/util';

@Component({
  selector: 'sailrc-race-analysis',
  templateUrl: './race-analysis.component.html',
  styleUrls: ['./race-analysis.component.css', '../mat-card-grid.css'],
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    RouterLink,
    MatButton,
    NgClass
  ]
})
export class RaceAnalysisComponent {
  readonly layoutService = inject(LayoutService);
}
