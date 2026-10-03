import { Component } from '@angular/core';
import { CardsGridSpec, MatCardsGridComponent } from '@processpuzzle/widgets/mat-cards-grid';
import { TranslocoDirective } from '@jsverse/transloco';

@Component( {
  selector: 'sailrc-race-preparation',
  template: `
    <ng-container *transloco="let t; prefix: 'navigation';">
      <h2>{{ t('plan_race') }}</h2>
      <mat-cards-grid [cards]="cards"/>
    </ng-container>/
  `,
  imports: [ MatCardsGridComponent, TranslocoDirective ],
  styleUrls: [ './race-planning-overview.component.css', '../mat-card-grid.css' ]
})
export class RacePlanningOverviewComponent {
  readonly cards: CardsGridSpec[] = [
    {
      title: 'race_card_title',
      subtitle: 'race_card_subtitle',
      content: ['race_card_content'],
      actions: [{ link: '/race-planning/race/doc', caption: 'read_more' }, { link: '/race-planning/race', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_planning'
    },
    {
      title: 'sailor_card_title',
      subtitle: 'sailor_card_subtitle',
      content: ['sailor_card_content'],
      actions: [{ link: '/race-planning/sailor/doc', caption: 'read_more' }, { link: '/race-planning/sailor', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_planning'
    },
    {
      title: 'yacht-club_card_title',
      subtitle: 'yacht-club_card_subtitle',
      content: ['yacht-club_card_content'],
      actions: [{ link: '/race-planning/yacht-clue/doc', caption: 'read_more' }, { link: '/race-planning/yacht-club', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_planning'
    },
    {
      title: 'boat_card_title',
      subtitle: 'boat_card_subtitle',
      content: ['boat_card_content'],
      actions: [{ link: '/race-planning/boat/doc', caption: 'read_more' }, { link: '/race-planning/boat', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_planning'
    },
    {
      title: 'boat-class_card_title',
      subtitle: 'boat-class_card_subtitle',
      content: ['boat-class_card_content'],
      actions: [{ link: '/race-planning/boat-class/doc', caption: 'read_more' }, { link: '/race-planning/boat-class', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_planning'
    },
    {
      title: 'sailing-place_card_title',
      subtitle: 'sailing-place_card_subtitle',
      content: ['sailing-place_card_content'],
      actions: [{ link: '/race-planning/sailing-place/doc', caption: 'read_more' }, { link: '/race-planning/sailing-place', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_planning'
    },
  ];
}
