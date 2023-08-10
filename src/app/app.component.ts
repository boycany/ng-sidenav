import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sidenav';
  isSidenavCollapsed = true;
  screenWidth = window.innerWidth;

  onToggleSidenav(data: SideNavToggle): void {
    console.log('----OnToggle=------');
    console.log('data :>> ', data);
    this.screenWidth = data.screenWidth;
    this.isSidenavCollapsed = data.collapsed;
  }
}
