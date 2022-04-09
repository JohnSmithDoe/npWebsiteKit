import {Component, Input, OnInit} from '@angular/core';
import {INPFooterOptions} from '../../../@types/np-website.types';

@Component({
  selector:    'np-footer',
  templateUrl: './np-footer.component.html',
  styleUrls:   ['./np-footer.component.scss'],
})
export class NPFooterComponent implements OnInit {

  @Input() options: INPFooterOptions;

  constructor() { }

  ngOnInit() {}

}
