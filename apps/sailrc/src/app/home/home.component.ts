import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardsGridSpec, MatCardsGridComponent } from '@processpuzzle/widgets/mat-cards-grid';

@Component({
  selector: 'app-content',
  template: `
    <h2>Sail Race Control</h2>
    <mat-cards-grid [cards]="cards"/>
  `,
  imports: [ MatCardModule, MatCardsGridComponent ],
  styleUrls: ['./home.component.css', '../mat-card-grid.css'],
})
export class HomeComponent {
  readonly cards: CardsGridSpec[] = [
    {
      title: 'plan_race',
      subtitle: '',
      content: ['plan_race_card_content'],
      actions: [{ link: '/race-planning/doc', caption: 'read_more' }, { link: '/race-planning', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'navigation',
    },
    {
      title: 'conduct_race',
      subtitle: '',
      content: ['conduct_race_card_content'],
      actions: [{ link: '/race-conduction/doc', caption: 'read_more' }, { link: '/race-conduction', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'navigation',
    },
    {
      title: 'analyse_race',
      subtitle: '',
      content: ['analyse_race_card_content'],
      actions: [{ link: '/race-analysis/doc', caption: 'read_more' }, { link: '/race-analysis', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'navigation',
    },
  ]
}
