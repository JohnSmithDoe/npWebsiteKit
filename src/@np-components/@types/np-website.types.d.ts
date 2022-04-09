import {ElementRef} from '@angular/core';
import {TAnimationFadeState} from '../utils/np-animations';
import {TIcon} from './np-ionic.types';

export interface INPMenuItem {
  id: string;
  label: string;
  icon?: TIcon | string;
  url: string | ((id: string, event: MouseEvent) => void); // link or click action
}

export interface INPMenuOptions {
  groups: { [key: string]: INPMenuItem[] };
}

export interface INPHeaderOptions {
  logoUrl?: string;
  logoLabel?: string;
  menu: INPMenuOptions;
}

export interface INPTitleOptions {
  imageUrl: string;
  headline: string;
  subheadline: string;
  subtext: string;
  link: string;
  href?: string;
  scrollTarget?: ElementRef | (() => ElementRef);
}

export interface INPCardOptions {
  imageUrl: string;
  animation: TAnimationFadeState;
  headline: string;
  subheadline: string;
  text: string;
}

export interface INPCardRowOptions {
  cards: INPCardOptions[];
}

export interface INPImageRowOptions {
  headline: string;
  cards: INPCardOptions[];
}

export interface INPSplitPanelOptions {
  text: string;
  imageUrl: string;
  user?: {
    name: string;
    address: string;
  };
}

export interface INPLink {
  label: string;
  href: string;
}

export interface INPFooterOptions {
  links: INPLink[];
  company: string;
  address: string;
}

export interface INPWebsiteConfig {
  menu: INPMenuOptions;
  title: string;
}
