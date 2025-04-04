import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { LayoutService } from '@processpuzzle/util';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './home.component.html',
  imports: [ MatCardModule, RouterLink, MatButton, NgClass ],
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly layoutService = inject(LayoutService);
}
