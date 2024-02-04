import { Component } from '@angular/core';
import { statistics } from '../constants/constants'
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
 stats = statistics;
 handleClick() {
  
 }
}
