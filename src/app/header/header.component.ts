import { Component, HostListener, Input } from '@angular/core';
import {
  faSearch,
  faFlag,
  faExpand,
  faBell,
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';
import { languages } from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  faSearch = faSearch;
  faFlag = faFlag;
  faExpand = faExpand;
  faBell = faBell;
  faCommentAlt = faCommentAlt;

  canShowSearchAsOverlay = false;
  selectedLanguage: any;

  languages = languages;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];
  }

  getHeadClass(): string {
    let styleClass = '';
    // console.log('this.collapsed :>> ', this.collapsed);
    // console.log('this.screenWidth :>> ', this.screenWidth);

    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
    }
  }
}
