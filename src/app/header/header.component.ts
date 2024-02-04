import { Component } from '@angular/core';
import {navLinks} from '../constants/constants'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 navs = navLinks;
}
