import { Component } from '@angular/core';
import {navLinks} from './constants/constants'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navs = navLinks;
  title = 'Nike';
}
