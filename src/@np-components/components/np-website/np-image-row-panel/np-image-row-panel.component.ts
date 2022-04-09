import {Component, HostListener, Input, OnInit} from '@angular/core';
import {INPImageRowOptions} from '../../../@types/np-website.types';
import {CANIMATIONS} from '../../../utils/np-animations';

@Component({
             selector:    'np-image-row-panel',
             templateUrl: './np-image-row-panel.component.html',
             styleUrls:   ['./np-image-row-panel.component.scss'],
             animations:  [CANIMATIONS.fade.meta],
           })
export class NPImageRowPanelComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() options: INPImageRowOptions;

  hasEnteredView = false;

  constructor() { }

  @HostListener('enteredView') private onEnterView = () => {
    this.hasEnteredView = true;
  };

  ngOnInit() {}

}
