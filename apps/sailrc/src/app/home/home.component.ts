import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-content',
  templateUrl: './home.component.html',
  imports: [MatCardModule],
  styleUrl: './home.component.css',
})
export class HomeComponent {}
