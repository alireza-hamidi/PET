import {Component} from '@angular/core';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './logged-layout.component.html'
})
export class LoggedLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
