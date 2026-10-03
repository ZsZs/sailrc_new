import { Component } from '@angular/core';
import { CardsGridSpec, MatCardsGridComponent } from '@processpuzzle/widgets/mat-cards-grid';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'sailrc-race-execution',
  template: `
    <ng-container *transloco="let t; prefix: 'navigation';">
      <h2>{{t('conduct_race')}}</h2>
      <mat-cards-grid [cards]="cards"/>
    </ng-container>
  `,
  styleUrls: ['./race-conduction-overview.component.css', '../mat-card-grid.css'],
  imports: [ MatCardsGridComponent, TranslocoDirective ]
})
export class RaceConductionOverviewComponent {
  readonly cards: CardsGridSpec[] = [
    {
      title: 'participant_card_title',
      subtitle: 'participant_card_subtitle',
      content: ['participant_card_content'],
      actions: [{ link: '/race-conduction/participant/doc', caption: 'read_more' }, { link: '/race-conduction/participant', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_conduction'
    },
    {
      title: 'field_card_title',
      subtitle: 'field_card_subtitle',
      content: ['field_card_content'],
      actions: [{ link: '/race-conduction/field/doc', caption: 'read_more' }, { link: '/race-conduction/field', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_conduction'
    },
    {
      title: 'start_card_title',
      subtitle: 'start_card_subtitle',
      content: ['start_card_content'],
      actions: [{ link: '/race-conduction/start/doc', caption: 'read_more' }, { link: '/race-conduction/start', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_conduction'
    },
    {
      title: 'finish_card_title',
      subtitle: 'finish_card_subtitle',
      content: ['finish_card_content'],
      actions: [{ link: '/race-conduction//doc', caption: 'read_more' }, { link: '/race-conduction/', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_conduction'
    },
    {
      title: 'trace_card_title',
      subtitle: 'trace_card_subtitle',
      content: ['trace_card_content'],
      actions: [{ link: '/race-conduction//doc', caption: 'read_more' }, { link: '/race-conduction/', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_conduction'
    },
    {
      title: 'broadcast_card_title',
      subtitle: 'broadcast_card_subtitle',
      content: ['broadcast_card_content'],
      actions: [{ link: '/race-conduction/broadcast/doc', caption: 'read_more' }, { link: '/race-conduction/broadcast', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_conduction'
    },
    {
      title: 'chat_card_title',
      subtitle: 'chat_card_subtitle',
      content: ['chat_card_content'],
      actions: [{ link: '/race-conduction/chat/doc', caption: 'read_more' }, { link: '/race-conduction/chat', caption: 'go', buttonType: 'filled' }],
      translocoPrefix: 'race_conduction'
    },
  ];
}
