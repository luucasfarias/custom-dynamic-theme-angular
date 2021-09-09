import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private head: HTMLHeadElement;
  private themeSrc: HTMLLinkElement;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public loadTheme(theme: string) {
    this.head = this.document.getElementsByTagName('head')[0];
    this.themeSrc = this.document.getElementById(
      'anymarket-theme'
    ) as HTMLLinkElement;

    if (this.themeSrc) {
      return (this.themeSrc.href = `${theme}.css`);
    }

    return this.setLink(theme);
  }

  private setLink(theme: string) {
    const style = this.document.createElement('link');
    style.id = 'anymarket-theme';
    style.rel = 'stylesheet';
    style.href = `${theme}.css`;

    this.head.appendChild(style);
  }
}
