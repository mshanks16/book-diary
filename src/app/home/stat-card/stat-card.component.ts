import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StatCardComponent {
  @Input() icon: string;
  @Input() title: string;
  @Input() subtitle: string;
}
