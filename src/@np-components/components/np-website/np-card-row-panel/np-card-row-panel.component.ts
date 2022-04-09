import {Component, HostListener, Input, OnInit} from '@angular/core';
import {INPCardRowOptions} from '../../../@types/np-website.types';
import {CANIMATIONS} from '../../../utils/np-animations';

@Component({
             selector:    'np-card-row-panel',
             templateUrl: './np-card-row-panel.component.html',
             styleUrls:   ['./np-card-row-panel.component.scss'],
             animations:  [CANIMATIONS.fade.meta],
           })
export class NPCardRowPanelComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() options: INPCardRowOptions;

  hasEnteredView = false;

  constructor() { }

  @HostListener('enteredView') private onEnterView = () => {
    this.hasEnteredView = true;
  };

  ngOnInit() {}

}
