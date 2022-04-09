import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {CANIMATIONS, TAnimationFadeState} from '../../../../utils/np-animations';

@Component({
             selector:    'np-card-item',
             templateUrl: './np-card-item.component.html',
             styleUrls:   ['./np-card-item.component.scss'],
             animations:  [CANIMATIONS.fade.meta]
           })
export class NPCardItemComponent implements OnInit {
  @Input() content = '$271'; // TODO: remove
  @Input() subline = '$271'; // TODO: remove
  @Input() startState: TAnimationFadeState = 'fadeOut';
  @Input() imageUrl: string;
  @Input() label = 'White Phoenix';
  @Output() execute: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  @Input() hasEnteredView = false;

  constructor() { }

  @HostListener('enteredView') private onEnterView = () => {
    this.hasEnteredView = true;
  };

  ngOnInit() {}

}
