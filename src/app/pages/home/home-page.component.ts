import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {INPCardRowOptions, INPImageRowOptions, INPSplitPanelOptions, INPTitleOptions} from '../../../@np-components/@types/np-website.types';
import {CANIMATIONS} from '../../../@np-components/utils/np-animations';


@Component({
             selector:    'app-home-page',
             templateUrl: './home-page.component.html',
             styleUrls:   ['./home-page.component.scss'],
             animations:  [CANIMATIONS.fade.meta]
           })
export class HomePage implements OnInit {
  @ViewChild('more', {read: ElementRef}) moreInfo: ElementRef;


  // np-25-Keys
  // titleOptions: INPTitleOptions = {
  //   imageUrl:     'assets/images/Slice1.png',
  //   scrollTarget: () => this.moreInfo,
  //   subheadline:  'MIDI-PIANO & SCALES/CHORDS TRAINER',
  //   headline:     'Play your MIDI-Keyboard, learn scales and chords.<br> Connect your MIDI-Controller and start playing.',
  //   subtext:      'Angular/Ionic-Project can be used as PWA, App, Website or Executable (with electron)',
  //   link:         'Learn more',
  //   href:         'home//welcome#more'
  // };

  // np-website
  titleOptions: INPTitleOptions = {
    imageUrl:     'assets/images/logo.png',
    scrollTarget: () => this.moreInfo,
    subheadline:  'NP-WEBSITE-KIT',
    headline:     'Angular/Ionic website components library<br>Create responsive animated websites like this without wordpress<br>:D',
    subtext:      'Angular/Ionic-Components library can be used to create a landing page with some nice animation effects',
    link:         'Learn more',
    href:         'home//welcome#more'
  };
  // np-25-Keys
  // headerOptions: INPHeaderOptions = {
  //   logoLabel: 'np25Keys',
  //   menu:      CMENU
  // };



  cardRowOptions: INPCardRowOptions = {
    cards: [
      {imageUrl: 'assets/images/logo.png', headline: 'XX', subheadline: 'XX', text: 'Simple Card with an image', animation: 'fadeLeft'},
      {imageUrl: 'assets/images/logo.png', headline: 'XX', subheadline: 'XX', text: 'Simple Card with an image', animation: 'fadeBottom'},
      {imageUrl: 'assets/images/logo.png', headline: 'XX', subheadline: 'XX', text: 'Simple Card with an image', animation: 'fadeRight'},
    ]
  };
  imageRowOptions: INPImageRowOptions = {
    headline: 'A row of images with hover effect',
    cards:    [
      {imageUrl: 'assets/images/logo.png', headline: 'XX', subheadline: 'XX', text: 'Simple product card as image', animation: 'fadeLeft'},
      {imageUrl: 'assets/images/logo.png', headline: 'XX', subheadline: 'XX', text: 'Simple product card as image', animation: 'fadeBottom'},
      {imageUrl: 'assets/images/logo.png', headline: 'XX', subheadline: 'XX', text: 'Simple product card as image', animation: 'fadeRight'},
    ]
  };
  splitOptions: INPSplitPanelOptions = {
    imageUrl: 'assets/images/logo.png',
    text:     '“Easy to use, easy to adjust. I got exactly what I ordered. Great service! :D“',
    user:     {
      name:    'Leto',
      address: 'the cOdemOnkey'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
