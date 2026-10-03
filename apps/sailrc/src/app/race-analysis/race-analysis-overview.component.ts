import { Component } from '@angular/core';
import { CardsGridSpec, MatCardsGridComponent } from '@processpuzzle/widgets/mat-cards-grid';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'sailrc-race-analysis',
  template: `
    <ng-container *transloco="let t; prefix: 'navigation';">
      <h2>{{t('analyse_race')}}</h2>
      <mat-cards-grid [cards]="cards"/>
    </ng-container>   
  `,
  styleUrls: ['./race-analysis-overview.component.css', '../mat-card-grid.css'],
  imports: [ MatCardsGridComponent, TranslocoDirective ]
})
export class RaceAnalysisOverviewComponent {
  readonly cards: CardsGridSpec[] = [
    {
      title: 'results',
      subtitle: '',
      content: ['results_card_content'],
      actions: [{ link: '/race-analysis/results/doc', caption: 'read_more' }, { link: '/race-analysis/results', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_analysis'
    },
    {
      title: 'replay',
      subtitle: '',
      content: ['replay_card_content'],
      actions: [{ link: '/race-analysis/replay/doc', caption: 'read_more' }, { link: '/race-conduction/replay', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_analysis'
    },
    {
      title: 'analyse',
      subtitle: '',
      content: ['analyse_card_content'],
      actions: [{ link: '/race-analysis/analyse/doc', caption: 'read_more' }, { link: '/race-analysis/analyse', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_analysis'
    },
    {
      title: 'chat',
      subtitle: '',
      content: ['chat_card_content'],
      actions: [{ link: '/race-analysis/chat/doc', caption: 'read_more' }, { link: '/race-analysis/chat', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_analysis'
    },
  ];
}
