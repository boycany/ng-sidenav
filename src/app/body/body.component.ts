import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor() {}

  getBodyClass(): string {
    // console.log('-----getBodyClass------');
    // console.log('this.collapsed :>> ', this.collapsed);
    // console.log('this.screenWidth :>> ', this.screenWidth);
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (
      this.collapsed &&
      this.screenWidth <= 768 &&
      this.screenWidth > 0
    ) {
      styleClass = 'body-md-screen';
    }

    // console.log('styleClass :>> ', styleClass);
    return styleClass;
  }
}
