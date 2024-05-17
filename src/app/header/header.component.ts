import { Component, Input } from '@angular/core';
import {
  faSearch,
  faFlag,
  faExpand,
  faBell,
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';

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

  getHeadClass(): string {
    let styleClass = '';
    console.log('this.collapsed :>> ', this.collapsed);
    console.log('this.screenWidth :>> ', this.screenWidth);

    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }
}
