import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { LikeButtonComponent, ShareButtonComponent } from '@processpuzzle/widgets';

@Component({
  selector: 'app-footer',
  imports: [ CommonModule, MatToolbar, LikeButtonComponent, ShareButtonComponent ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
