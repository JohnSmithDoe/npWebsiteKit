import {Component, Input, OnInit} from '@angular/core';
import {INPSplitPanelOptions} from '../../../@types/np-website.types';

@Component({
  selector:    'np-split-panel',
  templateUrl: './np-split-panel.component.html',
  styleUrls:   ['./np-split-panel.component.scss'],
})
export class NpSplitPanelComponent implements OnInit {
  @Input() options: INPSplitPanelOptions;
  constructor() { }

  ngOnInit() {}

}
