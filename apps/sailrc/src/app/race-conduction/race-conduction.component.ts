import { Component, inject } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { LayoutService } from '@processpuzzle/util';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sailrc-race-execution',
  templateUrl: './race-conduction.component.html',
  styleUrls: ['./race-conduction.component.css', '../mat-card-grid.css'],
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
export class RaceConductionComponent {
  readonly layoutService = inject(LayoutService);
}
