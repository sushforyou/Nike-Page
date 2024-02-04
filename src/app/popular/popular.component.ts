import { Component } from '@angular/core';
import { products } from '../constants/constants'
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {
 prods = products;
}
