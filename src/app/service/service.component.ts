import { Component } from '@angular/core';
import { services } from '../constants/constants'
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
servs = services;
}
